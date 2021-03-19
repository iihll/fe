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