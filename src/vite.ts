import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.vite as (options?: Options) => ReturnType<typeof unplugin.vite>
