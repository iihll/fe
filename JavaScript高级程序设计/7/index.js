class Counter {
  constructor(limit) {
    this.limit = limit
  }

  [Symbol.iterator]() {
    let count = 1,
        limit = this.limit
    return {
      next() {
        if(count <= limit) {
          return { done: false, value: count++}
        } else {
          return { done: true }
        }
      },
      return() {
        console.log('Exiting early')
        return { done: true }
      }
    }
  }
}

let counter = new Counter(3)

for (const i of counter) {
  if(i > 2) {
    break
  }
  console.log(i)
}