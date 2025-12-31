import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import onlyWarn from "eslint-plugin-only-warn";
import turboPlugin from "eslint-plugin-turbo";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  // File match
  { files: ["**/*.{js,mjs,cjs,ts}"] },

  // Global environment (browser)
  { languageOptions: { globals: globals.browser } },

  // Core recommended configs
  js.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,

  // Import plugin rules
  {
    plugins: { import: importPlugin },
    rules: {
      "import/order": [
        "off",
        {
          groups: [
            "builtin", // Node.js built-ins (fs, path, etc.)
            "external", // Packages from node_modules (like express)
            "internal", // Your own packages/libraries
            "parent", // Imports from parent directories
            "sibling", // Imports from sibling files
            "index", // Imports from the same directory (./index)
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
          pathGroups: [
            {
              pattern: "@metallicjs/**",
              group: "external",
              position: "after",
            },
            {
              pattern: "#/**",
              group: "internal",
              position: "before",
            },
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
        },
      ],
    },
  },

  // Turbo plugin rules
  {
    plugins: { turbo: turboPlugin },
    rules: {
      "turbo/no-undeclared-env-vars": "warn",
    },
  },

  // only-warn plugin
  {
    plugins: { onlyWarn },
  },

  // Ignore dist folder
  {
    ignores: ["dist/**"],
  },
];
