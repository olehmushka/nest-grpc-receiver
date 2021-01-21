module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js', 'proto/**/*', 'codegen/**/*', 'config/*'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    'lines-between-class-members': 0,
    'max-statements': [2, 15],
    'no-console': 1,
    'no-extra-boolean-cast': 0,
    'no-param-reassign': 0,
    'no-restricted-globals': 0,
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'no-useless-escape': 0,
    'no-useless-return': 0,
    'padding-line-between-statements': ['error', {blankLine: 'always', next: 'export', prev: 'const'}],
    'prefer-const': 0,
    'prefer-destructuring': [
      'error',
      {
        AssignmentExpression: {array: false, object: false},
        VariableDeclarator: {array: false, object: true},
      },
      {enforceForRenamedProperties: false},
    ],
    'spaced-comment': 0,
  },
};
