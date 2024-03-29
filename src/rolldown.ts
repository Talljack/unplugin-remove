import unplugin from './core/unplugin'
import type { Options } from './types'

export default unplugin.rolldown as (options?: Options) => ReturnType<typeof unplugin.rolldown>
