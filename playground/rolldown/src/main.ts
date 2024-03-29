debugger
// eslint-disable-next-line prettier/prettier
console.log(
  'hello world',
  'world hello',
  123
)

console.log('00000')
const a = true;
// https://github.com/Talljack/unplugin-remove/issues/8
!a && console.log('1111111')

a || console.log(2222)

a ?  2 : console.log('010101')

function test0() {
  const b = a && console.log(111)
  console.log(b)
}

console.log('hello world')

const test = (val) => {
  return 123 + val;
}

test(15)

console.log('🚀 ~ test test: test:()', test(10));

// https://github.com/Talljack/unplugin-remove/issues/82
console.log(`🚀 ~ onUnmounted ~ removeCardServiceSubscription(cardServicesSubscription): ${test(1)}`)
