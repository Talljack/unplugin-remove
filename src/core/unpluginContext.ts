import { createFilter } from '@rollup/pluginutils'
import MagicString from 'magic-string'
import type { Options } from '../types'
import { getAbsoluteFilePaths, removeConsoleLogs, removeDebugger } from '../utils'

export const createUnpluginContext = (options: Options = {}) => {
  const filter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )
  const transform = (code: string, id: string) => {
    let s = new MagicString(code)
    if (options.external && getAbsoluteFilePaths(options.external).includes(id)) {
      return {
        code,
        map: s.generateMap({ source: id, includeContent: true, hires: true }),
      }
    }
    code = removeDebugger(code)
    const { generatorCode } = removeConsoleLogs(code, options.consoleType, true)
    s = new MagicString(generatorCode)
    return {
      code: generatorCode,
      map: s.generateMap({ source: id, includeContent: true, hires: true }),
    }
  }
  return {
    filter,
    transform,
  }
}
