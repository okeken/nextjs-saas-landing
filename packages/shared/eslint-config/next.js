import nextPlugin from "@next/eslint-plugin-next";

import reactConfig from "./react.js";

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...reactConfig,

  // Next.js specific configuration
  {
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,

      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-img-element": "warn",
      "@next/next/no-unwanted-polyfillio": "error",
      "@next/next/no-page-custom-font": "warn",
    },
  },
];
