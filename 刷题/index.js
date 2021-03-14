function Person() {}
Person.prototype.sayName = () => {
  console.log('name')
}
let person = new Person()

person.sayName()

console.log(Array.of(3))
console.log(Array(3))
