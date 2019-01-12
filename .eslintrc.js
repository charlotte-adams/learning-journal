module.exports = {
  extends: ["eslint:recommended"],

  env: {
    browser: true,
  },

  parserOptions: { ecmaVersion: 6 },

  rules: {
    "no-console": 0,
    indent: ["warning", 2],
  },
};
