import { resolve } from "path";

import type { StorybookConfig } from "@storybook/react-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  // addons: ['@storybook/addon-essentials'],
  addons: [
    // "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: { name: "@storybook/react-vite", options: {} },
  viteFinal: async (cfg) => {
    // 1) tsconfig paths
    cfg.plugins = [...(cfg.plugins ?? []), tsconfigPaths({})];

    // 2) allow monorepo folders (no direct .push on possibly-undefined)
    const allow = new Set<string>([...(cfg.server?.fs?.allow ?? [])]);
    allow.add(resolve(__dirname, "..")); // project root
    allow.add(resolve(__dirname, "../../packages/ui")); // ui package

    cfg.server = {
      ...cfg.server,
      fs: {
        ...(cfg.server?.fs ?? {}),
        allow: Array.from(allow),
      },
    };

    return cfg;
  },
};

export default config;
