import { describe, expect, it, vi } from 'vitest'
import path from 'node:path'
import { removeConsoleLogs, getAbsoluteFilePaths } from '../src/utils'
import type { Options } from '../src/types'


describe('console.log', () => {
  const consoleType :Options['consoleType'] = ['log']
  it('normal console.log with ;', () => {
    const str = "console.log('00000');"
    expect(str).toBe("console.log('00000');")
    expect(removeConsoleLogs(str, consoleType)).toBe('')
  })
  it('normal console.log without ;', () => {
    const str = "console.log('00000')"
    expect(str).toBe("console.log('00000')")
    expect(removeConsoleLogs(str, consoleType)).toBe('')
    expect(removeConsoleLogs("console.log('hello world')", consoleType)).toBe('')
  })
  it('console.log with logic', () => {
    const str = 'a || console.log(2222);'
    const str1 = "!a && console.log('1111111');"
    const str2 = "a ? 2 : console.log('010101');"
    expect(removeConsoleLogs(str, consoleType)).toBe(str)
    expect(removeConsoleLogs(str1, consoleType)).toBe(str1)
    expect(removeConsoleLogs(str2, consoleType)).toBe(str2)
  })

  it('console.log with ();', () => {
    const fn = vi.fn((val: number) => 123 + val)
    const str = `console.log("🚀 ~ onUnmounted ~ removeCardServiceSubscription(cardServicesSubscription):", ${fn(1)})`
    expect(removeConsoleLogs(str, consoleType)).toBe('')
  })
})


describe('console.[log, warn]', () => {
  const consoleType :Options['consoleType'] = ['log', 'warn']
  it('normal console.log with ;', () => {
    const str = "console.log('00000'); const a = 123; console.warn('hello world');"
    expect(removeConsoleLogs(str, consoleType)).toBe('const a = 123;')
  })
  it('normal console.log without ;', () => {
    const str =  `
      console.log('00000')
      const a = 123
      console.warn('hello world')
    `
    expect(removeConsoleLogs(str, consoleType)).toBe('const a = 123;')
    expect(removeConsoleLogs("console.warn('hello world')", consoleType)).toBe('')
  })
  it('console.log with logic', () => {
    const str = 'a || console.warn(2222);'
    const str1 = "!a && console.log('1111111');"
    const str2 = "a ? console.warn('010101') : console.log('010101');"
    expect(removeConsoleLogs(str, consoleType)).toBe(str)
    expect(removeConsoleLogs(str1, consoleType)).toBe(str1)
    expect(removeConsoleLogs(str2, consoleType)).toBe(str2)
  })

  it('console.log with ();', () => {
    const fn = vi.fn((val: number) => 123 + val)
    const str = `console.warn("🚀 ~ onUnmounted ~ removeCardServiceSubscription(cardServicesSubscription):", ${fn(1)})`
    expect(removeConsoleLogs(str, consoleType)).toBe('')
  })
})

describe('test getAbsoluteFilePaths', () => {
  it('absolute path', () => {
    const filePaths = ['src/index.ts']
    expect(getAbsoluteFilePaths(filePaths)).toEqual([path.resolve(process.cwd(), 'src/index.ts')])
  })
})