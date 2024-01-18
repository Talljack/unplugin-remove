import { count } from './test'
debugger
// eslint-disable-next-line prettier/prettier
console.log(
  'hello world',
  'world hello',
  123
)
document.getElementById('app')!.innerHTML = `__UNPLUGIN__${count}`

console.log('00000')
const a = true;

!a && console.log('1111111')

a || console.log(2222)

a ?  2 : console.log('010101')

function test0() {
  const b = a && console.log(111)
  console.log(b)
}

console.log('hello world')

const test = () => console.log(123)

test()
