import path from 'node:path'
import * as parser from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'
import t from '@babel/types'
import type { Options } from '../types'

export const getAbsoluteFilePaths = (filePaths: string[]) => {
  return filePaths.map((filePath) => {
    return path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath)
  })
}

/**
 *
 * @param code
 * @param types
 * @param sourceMaps
 */
export function removeConsoleLogs(code: string, types: Options['consoleType'], sourceMaps = false) {
  const ast = parser.parse(code, {
    sourceType: 'unambiguous',
    plugins: ['jsx'],
  })
  types = types ?? ['log']
  const traverser = traverse.default ? traverse.default : traverse
  traverser(ast, {
    CallExpression(path: any) {
      if (
        path.node.callee.type === 'MemberExpression'
        && path.node.callee.object.name === 'console'
        && types.includes(path.node.callee.property.name)
      ) {
        // For direct console.log; removal
        if (t.isExpressionStatement(path.parent))
          path.parentPath.remove()
      }
    },
  })
  const mergedGenerator = generator.default ?? generator
  return mergedGenerator(ast, {
    sourceMaps,
  })
}

/**
 *
 * @param code
 */
export function removeDebugger(code: string) {
  return code.replace(/debugger;?/g, '')
}
