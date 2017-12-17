module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb', 'standard', 'plugin:promise/recommended'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {},
      'babel-module': {},
    },
  },
  globals: {
    localStorage: true,
    chrome: true,
    CHROME_EXTENSION_OAUTH_UID: true,
    CHROME_EXTENSION_OAUTH_SECRET: true,
    css: true,
  },
  rules: {
    // style
    'space-before-function-paren': ['error', 'never'],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'no-multi-spaces': [
      'error',
      {
        exceptions: {
          Property: true,
          ImportDeclaration: true,
        },
      },
    ],
    'key-spacing': [
      'error',
      {
        mode: 'strict',
        align: 'value',
      },
    ],
    'arrow-parens': ['error', 'as-needed'],
    'function-paren-newline': ['off'], // handled by prettier

    // other
    'no-console': 'off',
    'import/prefer-default-export': ['warn'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'no-underscore-dangle': ['off'],

    // TODO
    'react/prop-types': ['warn'],
    'react/forbid-prop-types': ['warn'],
    // https://github.com/xjamundx/eslint-plugin-promise/issues/73
    'promise/catch-or-return': ['warn'],
  },
}
