// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    node: true,
  },
  extends: ["expo", "prettier"],
  plugins: ["prettier", "perfectionist"],
  rules: {
    "perfectionist/sort-imports": ["error", { type: "line-length" }],
    "perfectionist/sort-named-exports": ["error", { type: "line-length" }],
    "perfectionist/sort-named-imports": ["error", { type: "line-length" }],
    "perfectionist/sort-objects": ["error", { type: "alphabetical" }],
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
