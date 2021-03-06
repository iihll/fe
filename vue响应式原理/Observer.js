class Observer {
  constructor(vm, data) {
    this.observer(data)
  }
  // 劫持数据
  observer(data) {
    if (data && typeof data === 'object') {
      for (const key in data) {
        const value = data[key]
        // if (typeof value === "object") {
        //   this.observer(value)
        // } else {
        this.define(key, value, data)
        // }
      }
    }
  }
  define(key, value, obj) {
    this.observer(value)

    const dep = new Dep()

    Object.defineProperty(obj, key, {
      set(newVaule) {
        if (newVaule !== value) {
          value = newVaule
          console.log(dep);
          dep.notify()
        }
      },
      get() {
        Dep.target && dep.addWatcher(Dep.target)
        return value
      }
    })
  }
}

class Dep {
  constructor() {
    this.subs = []
  }
  addWatcher(watch) {
    this.subs.push(watch)
  }
  notify() {
    this.subs.map((item) => {
      item.updater()
    })
  }
}

class Watcher {
  constructor(vm, value, cb) {
    this.vm = vm
    this.value = value
    this.cb = cb
    this.get()
  }

  get() {
    Dep.target = this
    let value = util.getVal(this.vm, this.value)
    Dep.target = null
    // return value
  }

  updater() {
    let newValue = util.getVal(this.vm, this.value)
    let oldValue = this.value
    if (newValue !== oldValue) {
      this.cb(newValue)
    }
  }
}
