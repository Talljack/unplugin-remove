import { createUnplugin } from 'unplugin'
import type { Options } from '../types'
import { defaultOptions } from './constant'
import { createUnpluginContext } from './unpluginContext'
export default createUnplugin<Options>(options => {
  const ctx = createUnpluginContext(options ?? defaultOptions)
  return {
    name: 'unplugin-remove-console-debugger',
    enforce: 'post' as const,
    apply: 'build',
    transformInclude(id) {
      return ctx.filter(id)
    },
    transform(code, id) {
      return ctx.transform(code, id)
    },
  }
})
