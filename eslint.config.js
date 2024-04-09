import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  rules: {
    'antfu/top-level-function': 'off',
    'style/arrow-parens': 'off',
    'node/prefer-global/process': 'off',
    'no-debugger': 'off',
    'no-console': 'off',
  },
})
