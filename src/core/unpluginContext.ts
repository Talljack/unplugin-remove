import { createFilter } from '@rollup/pluginutils'
import MagicString from 'magic-string'
import type { Options } from '../types'
import { getAbsoluteFilePaths } from './utils'
export const createUnpluginContext = (options: Options = {}) => {
  const filter = createFilter(
    options.include || [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.svelte$/],
    options.exclude || [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/],
  )
  const transform = (code: string, id: string) => {
    const s = new MagicString(code)
    if (options.external && getAbsoluteFilePaths(options.external).includes(id)) {
      return {
        code,
        map: null,
      }
    }
    const reg = new RegExp(
      `console\\.(${options.consoleType?.join('|') || 'log'})\\s*\\([\\s\\S]*?\\)(?:\\s*;)?\\s*\\)?;?`,
      'g',
    )
    s.replace(reg, '')
    s.replace(/debugger;?/g, '')
    return {
      code: s.toString(),
      map: s.generateMap({ source: id, includeContent: true }),
    }
  }
  return {
    filter,
    transform,
  }
}
