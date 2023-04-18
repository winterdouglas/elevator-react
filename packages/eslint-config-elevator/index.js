module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    // "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: [
    "react",
    // This in combination with the no-extraneous-dependencies below prevents the usage of an unreferenced package in the monorepo
    "import",
    "@typescript-eslint",
  ],
  ignorePatterns: ["*.cjs", "*.config.js"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
};
