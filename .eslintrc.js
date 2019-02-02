module.exports = {
  extends: ["eslint:recommended"],

  env: {
    browser: true,
  },

  parserOptions: { ecmaVersion: 6 },

  rules: {
    "no-console": 0,
    indent: ["warn", 2],
    eqeqeq: ["error", "always"],
  },
};
