// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "perfectionist/sort-named-imports": "error",
    "perfectionist/sort-named-exports": "error",
    "perfectionist/sort-imports": "error",
    "perfectionist/sort-objects": "error",
  },
  extends: [
    "expo",
    "prettier",
    "plugin:perfectionist/recommended-line-length-legacy",
  ],
  plugins: ["prettier", "perfectionist"],
  env: {
    node: true,
  },
};
