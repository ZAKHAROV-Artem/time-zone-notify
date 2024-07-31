// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  rules: {
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-imports": "error",
    "perfectionist/sort-objects": "error",
    "prettier/prettier": "error",
  },
  extends: [
    "expo",
    "prettier",
    "plugin:perfectionist/recommended-line-length-legacy",
  ],
  plugins: ["prettier", "perfectionist"],
};
