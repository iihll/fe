/*
 * @Author: iihll
 */
/*
 * @Author: iihll
 */
const _ = require('lodash')
const { log } = console

function getUrl(protocol, domain, port, path) {
  return protocol + '://' + domain + ':' + port + '/' + path
}

const test = _.curry(getUrl)('http', 'localhost', '3000')
const test1 = _.curry(getUrl)('https', 'localhost', '6000')

console.log(test('index.html'))
console.log(test1('index.html'))

let person = [
  { name: 'kevin', age: 11, arr: [1] },
  { name: 'daisy', age: 24, arr: [2] }
]

// let getProp = _.curry((key, obj) => {
//   return obj[key]
// })

let getProp = key => obj => obj[key]

log(person.map(getProp('arr')).flat())