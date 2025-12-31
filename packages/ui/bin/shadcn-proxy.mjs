#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readdirSync,
  renameSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// --- paths ----------------------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pkgRoot = join(__dirname, ".."); // => packages/ui
const uiSrcDir = join(pkgRoot, "src", "components"); // => packages/ui/src/components

// --- helpers --------------------------------------------------
const toPascal = (kebabOrCamel) =>
  kebabOrCamel
    .replace(/[-_]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/^\w/, (c) => c.toUpperCase());

const storyTemplate = (nameKebab) => {
  const Name = toPascal(nameKebab);
  return `import type { Meta, StoryObj } from '@storybook/react';
import { ${Name} } from '@metallicjs/ui/components/${nameKebab}';

const meta = {
  title: 'Components/${Name}',
  component: ${Name},
  tags: ['autodocs'],
  parameters: { layout: 'centered' }
} satisfies Meta<typeof ${Name}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: '${Name}' }
};
`;
};

// --- run real CLI in packages/ui ------------------------------
const args = process.argv.slice(2);
const run = (cmd, argv) => {
  const { status } = spawnSync(cmd, argv, {
    stdio: "inherit",
    shell: true,
    cwd: pkgRoot,
  });
  if (status !== 0) process.exit(status ?? 1);
};

// Use the new `shadcn` package name
run("npx", ["--yes", "shadcn@latest", ...args]);

// --- normalize + generate stories (SAFE) ----------------------
try {
  if (!existsSync(uiSrcDir)) process.exit(0);

  const entries = readdirSync(uiSrcDir);

  // 1) Normalize flat component files into folders (without overwriting)
  const flatFiles = entries.filter(
    (f) =>
      f.endsWith(".tsx") &&
      f !== "index.tsx" && // ignore aggregator
      !f.endsWith(".stories.tsx") // ignore root stories here
  );

  for (const f of flatFiles) {
    const srcPath = join(uiSrcDir, f);
    if (!statSync(srcPath).isFile()) continue;

    const name = f.slice(0, -4); // strip .tsx
    const compDir = join(uiSrcDir, name);
    const destIndex = join(compDir, "index.tsx");

    // If destination already exists, skip to avoid overriding
    if (existsSync(destIndex)) {
      console.log(
        `⚠︎ skip normalize: ${name} — destination already exists (src/components/${name}/index.tsx)`
      );
      continue;
    }

    // If a folder exists but no index.tsx, we can move safely
    mkdirSync(compDir, { recursive: true });

    // Extra safety: if something else (not a file) is at destIndex, skip
    if (existsSync(destIndex)) {
      console.log(
        `⚠︎ skip normalize: ${name} — unexpected conflict at destination.`
      );
      continue;
    }

    // Move <name>.tsx -> <name>/index.tsx
    renameSync(srcPath, destIndex);
    console.log(
      `→ normalized: src/components/${f} → src/components/${name}/index.tsx`
    );
  }

  // 2) Stories: create only when none exist; optionally relocate legacy root story
  // Build a quick set of current dir entries
  const refreshed = readdirSync(uiSrcDir);

  for (const entry of refreshed) {
    const compDir = join(uiSrcDir, entry);
    if (!statSync(compDir).isDirectory()) continue;

    const indexPath = join(compDir, "index.tsx");
    if (!existsSync(indexPath)) {
      // Not a standard component folder; skip
      continue;
    }

    const colocatedStoryPath = join(compDir, `${entry}.stories.tsx`);
    const legacyRootStoryPath = join(uiSrcDir, `${entry}.stories.tsx`);

    const hasColocatedStory = existsSync(colocatedStoryPath);
    const hasLegacyRootStory = existsSync(legacyRootStoryPath);

    // If either a colocated or legacy story exists, do not generate a new one
    if (hasColocatedStory || hasLegacyRootStory) {
      // Optionally relocate legacy story to the component folder IF no colocated one exists
      if (hasLegacyRootStory && !hasColocatedStory) {
        try {
          renameSync(legacyRootStoryPath, colocatedStoryPath);
          console.log(
            `→ moved legacy story: src/components/${entry}.stories.tsx → src/components/${entry}/${entry}.stories.tsx`
          );
        } catch (e) {
          console.log(
            `⚠︎ could not move legacy story for ${entry}; leaving in place.`,
            e?.message ?? e
          );
        }
      } else {
        console.log(`✓ story exists for ${entry} — no regeneration`);
      }
      continue;
    }

    // No story found anywhere → scaffold
    try {
      writeFileSync(colocatedStoryPath, storyTemplate(entry), "utf8");
      console.log(
        `→ scaffolded story: src/components/${entry}/${entry}.stories.tsx`
      );
    } catch (e) {
      console.error(`⚠︎ failed to write story for ${entry}:`, e?.message ?? e);
    }
  }

  run("pnpm", ["i"]);
} catch (e) {
  console.error("Normalize/Story error:", e);
  process.exit(1);
}
