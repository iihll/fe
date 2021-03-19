<<<<<<< HEAD
let tree = [
  {
    id: 1, name: 'name_1',
    children: [
      { id: 11, name: 'name_11' },
      {
        id: 12, name: 'name_12',
        children: [
          { id: 121, name: 'name_121' }
        ]
      }
    ]
  },
  { id: 2, name: 'name_2', children: [{ id: 21, name: 'name_21' }] },
  { id: 3, name: 'name_3' }
]

let newTree = JSON.parse(JSON.stringify(tree))

let newTree = newTree.flat(3)

function insert(m, n) {
  return new Array(m).fill(n)
}
=======
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
>>>>>>> 9a5b8714fa6f4c920553425aaae73d446e9ba3cc
