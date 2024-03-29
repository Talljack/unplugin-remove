import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.rspack as (options?: Options) => ReturnType<typeof unplugin.rspack>
