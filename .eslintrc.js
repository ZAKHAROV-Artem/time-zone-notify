// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  env: {
    node: true,
  },
  extends: [
    "expo",
    "prettier",
    "plugin:perfectionist/recommended-line-length-legacy",
  ],
  plugins: ["prettier", "perfectionist"],
  rules: {
    "perfectionist/sort-imports": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-objects": ["error", { type: "alphabetical" }],

    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
