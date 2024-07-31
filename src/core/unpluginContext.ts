import { createFilter } from '@rollup/pluginutils'
import type { Options } from '../types'
import { removeConsoleLogs, removeDebugger } from '../utils'

export const createUnpluginContext = (options: Options = {}) => {
  const filter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )
  const transform = (code: string) => {
    code = removeDebugger(code)
    removeConsoleLogs(code, options.consoleType, options.sourceMaps)
  }
  return {
    filter,
    transform,
  }
}
