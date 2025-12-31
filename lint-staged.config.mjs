export default {
  "**/*.{js,ts,tsx}": 'pnpm eslint --fix --rule "import/order:error"',
  "**/*": "prettier --write --ignore-unknown",
};
