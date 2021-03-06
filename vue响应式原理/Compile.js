const updater = new Updater()

const util = {
  getVal(vm, value) {
    value = value.split('.')
    return value.reduce((prev, next) => prev[next], vm.$data)
  },
  setVal(vm, value, newValue) {},
  show(node, vm, value) {
    let val = this.getVal(vm, value)
    new Watcher(vm, value, (newValue) => {
      if (!newValue) {
        node.style.display = 'none'
      }
    })
    // 初始化
    if (val) {
      node.style.display = (node.style.display !== 'none' ? node.style.display : 'block')
    } else {
      node.style.display = 'none'
    }
  },
  text(node, vm, value) {
    let val = this.getVal(vm, value)
    new Watcher(vm, value, newValue => {
      updater.updateText(node, newValue)
    })
    updater.updateText(node, val)
  }
}

class Compile {
  constructor(vm, el) {
    this.vm = vm
    this.render(el)
  }
  render(el) {
    const root = this.isElement(el)
    // 遍历子元素
    for (const node of [...root.childNodes]) {
      if (this.isText(node)) {
        this.compileText(node)
      } else {
        for (const attr of [...node.attributes]) {
          if (this.isDirective(attr.name)) {
            // 解析
            const value = attr.value
            const [, type] = attr.name.split('-')
            util[type](node, this.vm, value)
          }
        }
      }

      if (node.childNodes && node.childNodes.length) {
        this.render(node)
      }
    }
  }
  isElement(el) {
    return el.nodeType === 1 ? el : document.querySelector(el)
  }
  isText(node) {
    return node.nodeType === 3
  }
  isDirective(attr) {
    return attr.startsWith('v-')
  }
  compileText(node) {
    const content = node.textContent
    let reg = /\{\{(.+?)\}\}/g; // 匹配模板编译器的内容
    // 如果能匹配到模板编译器
    if(reg.test(content)) {
      content.replace(reg, (match, p) => {
        // 编译文本节点
        
        util.text(node, this.vm, p.trim());
      })
    }
  }
}
