module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': 'off',
    'react/no-unescaped-entities': 'off',
    // 'jsx-a11y/img-redundant-alt': 'off',
  },
};

// module.exports = {
//   env: {
//     browser: true,
//     es2021: true,
//     jest: true,
//     node: true,
//   },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react-hooks/recommended',
//     'plugin:react/jsx-runtime',
//   ],
//   globals: {
//     Atomics: 'readonly',
//     SharedArrayBuffer: 'readonly',
//   },
//   parserOptions: {
//     ecmaFeatures: {
//       jsx: true,
//     },
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//   },
//   plugins: ['react' /* 'prettier' */, 'react-hooks'],
//   settings: {
//     react: {
//       version: 'detect',
//     },
//   },
//   rules: {
//     'react/react-in-jsx-scope': 'off',
//     'no-unused-vars': 'off',
//     'react/no-unescaped-entities': 'off',
//     'react/jsx-filename-extension': 'off',
//     'jsx-a11y/anchor-is-valid': 'off',
//   },
// };
