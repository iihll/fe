function new_instance_of(leftValue, rightValue) {
  let rightProto = rightValue.prototype
  leftValue = leftValue.__proto__
  while(true) {
    if(leftValue === null) {
      return false
    }
    if(leftValue === rightProto) {
      return true
    }
    leftValue = leftValue.__proto__
  }
}

console.log(new_instance_of("", String))