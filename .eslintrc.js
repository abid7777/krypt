module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint-config-preact',
    'plugin:tailwindcss/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['tailwindcss'],
  rules: {
    'react/prop-types': 'off',
  },
  settings: {
    'import/resolver': {
      webpack: {},
    },
  },
};
