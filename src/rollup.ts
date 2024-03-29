import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.rollup as (options?: Options) => ReturnType<typeof unplugin.rollup>
