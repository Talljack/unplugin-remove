import { createFilter } from '@rollup/pluginutils'
import type { Options } from '../types'
import { getAbsoluteFilePaths, removeConsoleLogs, removeDebugger } from '../utils'

export const createUnpluginContext = (options: Options = {}) => {
  const filter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )
  const transform = (code: string, id: string) => {
    if (options.external && getAbsoluteFilePaths(options.external).includes(id)) {
      return {
        code,
        map: null,
      }
    }
    code = removeDebugger(code)
    return removeConsoleLogs(code, options.consoleType, true)
  }
  return {
    filter,
    transform,
  }
}
