// 请实现一个 find 函数，功能等同于 document.getElementById
const body = document.body

function getId(node, nodeIdMap) {
  if(node) {
    if(node.id) nodeIdMap[node.id] = node
    const children = node.children
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      getId(element, nodeIdMap)
    }
  }
  return nodeIdMap
}

const ids = getId(document, {})

const findDomById = id => ids[id]