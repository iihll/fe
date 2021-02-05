class SuperType {
  constructor() {
    this.property = true
  }
  getSuperValue() {
    return this.property
  }
}

class SubType extends SuperType {
  constructor() {
    super()
    this.subproperty = false
  }
  getSubValue() {
    return this.subproperty
  }
  getSuperValue() {
    return false
  }
}

// let instance = new SubType()
// console.log(instance.getSuperValue())

function newObj() {
  const obj = {}
}