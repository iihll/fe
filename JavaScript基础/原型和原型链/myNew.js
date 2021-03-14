function myNew(func, ...rest) {
  let obj = Object.create(func.prototype)
  let result = func.apply(obj, rest)

  return typeof result === 'object' ? result : obj
}

let Obj = function(name, age) {
  this.name = name
  this.age = age
  this.get = function() {
    console.log(this.name)
  }
}

const obj = myNew(Obj, 'test', 12)

console.log(obj.get())


function test() {
  let o = {}
  o.name = 1
  return o
}

