import { count } from './test'
debugger
// eslint-disable-next-line prettier/prettier
console.log(
  'hello world',
  'world hello',
  123
)
document.getElementById('app')!.innerHTML = `__UNPLUGIN__${count}`

console.log('hello world')

const test = () => console.log(123)

test()
