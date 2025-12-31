import globals from "globals";

import baseConfig from "./base.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,

  // Node.js specific configuration
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2022,
      },
    },
    rules: {
      // Node.js specific rules
      "no-console": "off", // Console is fine in Node.js
      "no-process-env": "off", // Process.env is common in Node.js
      "no-process-exit": "warn", // Warn about process.exit()

      // Import rules for Node.js
      "import/no-nodejs-modules": "off", // Allow Node.js built-in modules
      "import/prefer-default-export": "off", // Named exports are fine
    },
  },

  // Override for specific Node.js files
  {
    files: ["**/*.config.{js,ts}", "**/scripts/**/*.{js,ts}"],
    rules: {
      "no-console": "off",
      "@typescript-eslint/no-var-requires": "off", // Allow require() in config files
    },
  },
];
