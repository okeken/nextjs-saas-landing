// scripts/gen-og-from-ui.mjs
import fs from "node:fs";
import path from "node:path";

const ENTRY = "packages/ui/src/styles/globals.css";
const OUT = "apps/web/lib/seo/generated-og-tokens.ts";

const BASE_OG = {
  light: { bg: "#ffffff", fg: "#000000", muted: "#525252", accent: "#5a00b8" },
  dark: { bg: "#000000", fg: "#ffffff", muted: "#cccccc", accent: "#8c33ff" },
};

const read = (p) => fs.readFileSync(p, "utf8");
const stripComments = (s) => s.replace(/\/\*[\s\S]*?\*\//g, "");

// inline only relative @import "...";
function inlineImports(entryPath, seen = new Set()) {
  const abs = path.resolve(entryPath);
  if (seen.has(abs)) return "";
  seen.add(abs);

  const css = stripComments(read(abs));
  const importRe = /@import\s+(?:url\()?["']([^"']+)["']\)?\s*;/g;

  return css.replace(importRe, (_, spec) => {
    if (!spec.startsWith(".") && !spec.startsWith("/")) return ""; // ignore package imports

    const next = path.resolve(path.dirname(abs), spec);
    if (!fs.existsSync(next)) return "";

    return inlineImports(next, seen);
  });
}

// grab ALL occurrences like :root { ... } or .dark { ... }
function extractBlocks(css, selector) {
  const re = new RegExp(`${selector}\\s*\\{([\\s\\S]*?)\\}`, "g");
  let out = "";
  let m;
  while ((m = re.exec(css))) out += `\n${m[1]}\n`;
  return out;
}

function parseVars(block) {
  const vars = {};
  const re = /--([a-zA-Z0-9_-]+)\s*:\s*([^;]+);/g;
  let m;
  while ((m = re.exec(block))) vars[m[1].trim()] = m[2].trim();
  return vars;
}

// resolve ONLY pure var(--x) references (simple + safe)
function resolveVar(v, vars, depth = 0) {
  if (!v || depth > 30) return v;
  const m = String(v)
    .trim()
    .match(/^var\(--([a-zA-Z0-9_-]+)\)$/);
  if (!m) return v;
  const next = vars[m[1]];
  return next ? resolveVar(next, vars, depth + 1) : v;
}

function resolveAll(vars) {
  const out = {};
  for (const k of Object.keys(vars)) out[k] = resolveVar(vars[k], vars);
  return out;
}

// don’t allow OG tokens to become var(--x)
const ok = (v) => (v && !String(v).trim().startsWith("var(") ? v : undefined);

function pickOg(resolved, theme) {
  const base = BASE_OG[theme];

  return {
    ...base,
    ring: ok(resolved.ring),
    bg:
      ok(resolved.background) ??
      ok(resolved["gray-900"]) ??
      ok(resolved["gray-50"]) ??
      base.bg,

    fg:
      ok(resolved.foreground) ??
      ok(resolved["gray-0"]) ??
      ok(resolved["gray-800"]) ??
      base.fg,

    muted:
      ok(resolved["muted-foreground"]) ??
      ok(resolved["gray-600"]) ??
      ok(resolved["gray-300"]) ??
      base.muted,

    accent:
      ok(resolved.primary) ??
      ok(resolved["primary-600"]) ??
      ok(resolved["primary-400"]) ??
      base.accent,
  };
}

// ---------------- run ----------------
const css = inlineImports(ENTRY);

const rootVars = parseVars(extractBlocks(css, ":root"));
const darkVars = parseVars(extractBlocks(css, "\\.dark"));

const rootResolved = resolveAll(rootVars);
const darkResolved = resolveAll({ ...rootVars, ...darkVars });

const OG_TOKENS = {
  light: pickOg(rootResolved, "light"),
  dark: pickOg(darkResolved, "dark"),
};

const outAbs = path.resolve(OUT);
fs.mkdirSync(path.dirname(outAbs), { recursive: true });

fs.writeFileSync(
  outAbs,
  `/* AUTO-GENERATED. DO NOT EDIT.
   Source entry: ${path.resolve(ENTRY)}
*/
export type OgTheme = "light" | "dark";

export const OG_TOKENS = ${JSON.stringify(OG_TOKENS, null, 2)} as const;
`,
  "utf8"
);

console.log("✅ generated", outAbs);
