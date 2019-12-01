module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    'vue/html-self-closing': ['error', {
      'html': {
        'void': 'any',
        'normal': 'any',
        'component': 'any'
      },
      'svg': 'always',
      'math': 'always'
    }],
    'vue/attribute-hyphenation': [2, 'always'],
    // allows better control of spacing between elements
    'vue/multiline-html-element-content-newline': 'off',
    'max-len': [0, 100, {
      ignoreStrings: true,
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

      'operator-linebreak': 'off',
      'implicit-arrow-linebreak': 'off',
      'object-curly-newline': 'off',
      'no-console': ['error', {
        allow: ['error']
      }],
      'no-else-return': 'off',
      'no-multiple-empty-lines': 'off',
      'lines-between-class-members': 'off',
      'import/order': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
