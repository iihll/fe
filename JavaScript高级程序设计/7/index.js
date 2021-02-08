function* generatorFn() {
  yield
}

let generatorObject = generatorFn()

console.log(generatorObject.next())
console.log(generatorObject.next())