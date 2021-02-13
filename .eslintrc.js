// https://eslint.org/docs/user-guide/configuring

/** @type {ESLintConfig} */
const config = {
  ignorePatterns: ["**/*.html", "build/"],
  env: {
    es6: true,
    browser: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2015,
  },
  extends: ["eslint:recommended", "prettier"],
  overrides: [
    {
      files: ["**/*.ts"],
      plugins: ["@typescript-eslint"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
      ],
    },
    {
      files: ["**/*.svelte"],
      plugins: ["svelte3"],
      processor: "svelte3/svelte3",
    },
    {
      files: [".eslintrc.js", "rollup.config.js"],
      env: { browser: false, node: true, es2017: true, es2020: true },
      parserOptions: { ecmaVersion: 2020 },
    },
  ],
};

module.exports = config;

/** @typedef {import("eslint").Linter.Config} ESLintConfig */
