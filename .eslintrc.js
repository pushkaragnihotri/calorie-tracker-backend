module.exports = {
  env: {
    browser: true,
    commonjs: true,
  },
  extends: ['airbnb'],
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: ['no-loops'],
  rules: {
    camelcase: 'off',
    'no-loops/no-loops': 0, // 2 means throw an ERROR
    'no-console': 'off',
    'no-plusplus': 'off',
    'max-len': 0,
    'global-require': 'off',
    'no-use-before-define': 0,
    'no-param-reassign': 0,
    'import/no-dynamic-require': 0,
    'no-restricted-syntax': 0,
  },
};
