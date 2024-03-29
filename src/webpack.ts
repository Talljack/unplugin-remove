import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.webpack as (options?: Options) => ReturnType<typeof unplugin.webpack>
