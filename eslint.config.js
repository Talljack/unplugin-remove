// @ts-check
import createEslintConfig from 'talljack-eslint-config'

export default createEslintConfig({
  typescript: true,
  formatters: true,
  markdown: true,
  rules: {
    'antfu/top-level-function': 'off',
    'style/arrow-parens': 'off',
    'node/prefer-global/process': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
  ignores: ['README.md'],
})
