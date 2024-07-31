import type { FilterPattern } from '@rollup/pluginutils'

export interface Options {
  /**
   * don't remove console.log and debugger these module
   * @default []
   */
  external?: Array<string>

  /**
   * remove console type of these module
   * @default ['log']
   */
  consoleType?: Array<'log' | 'warn' | 'error' | 'info' | 'debug'>
  /**
   * Rules to include transforming target.
   * @default [/\.[jt]sx?$/, /\.vue\??/]
   */
  include?: FilterPattern

  /**
   * Rules to exclude transforming target.
   * @default [/node_modules/, /\.git/]
   */
  exclude?: FilterPattern

  /**
   * Options for @babel/generator
   * @see https://babeljs.io/docs/en/babel-generator sourceMaps
   * @default true
   */
  sourceMaps?: boolean
}
