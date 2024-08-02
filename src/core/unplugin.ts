import { createUnplugin } from 'unplugin'
import type { Options } from '../types'
import { defaultOptions } from './constant'
import { createUnpluginContext } from './unpluginContext'

export default createUnplugin<Options>((options?: Options) => {
  const ctx = createUnpluginContext(options ?? defaultOptions)
  options = options ?? defaultOptions
  return {
    name: 'unplugin-remove-console-debugger',
    enforce: 'post' as const,
    apply: 'build',
    transformInclude(id) {
      return ctx.filter(id)
    },
    transform(code, id) {
      // if (!options.external?.length || (options.external.length > 0 && !getAbsoluteFilePaths(options.external).includes(id)))
      //   return ctx.transform(code)
      return ctx.transform(code, id)
    },
  }
})
