import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.esbuild as (options?: Options) => any
