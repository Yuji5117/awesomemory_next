/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: ['next/core-web-vitals', 'prettier'],
  plugins: ['import', 'unused-imports', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'object'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
}
