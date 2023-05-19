module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    "no-unused-vars": 0,
    "quotes": 0,
    "quote-props": 0,
    "import/no-extraneous-dependencies": 0,
    "class-methods-use-this": 0,
    "no-console": 0,

  },
};
