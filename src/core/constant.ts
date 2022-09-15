import type { Options } from '../types'
export const defaultOptions: Options = {
  external: [],
  consoleType: ['log'],
  include: [/\.[jt]sx?$/, /\.vue\??/],
  exclude: [/node_modules/, /\.git/],
}
