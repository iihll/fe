/* 1. for 循环 */
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, NaN, NaN, true, true, undefined, undefined, null, null, Infinity, Infinity, '1', +0, -0, 0]

for(let i = 0; i < arr.length; i++) {
  for(let j = i + 1; j < arr.length; j++) {
    if(arr[i] === arr[j]) {
      arr.splice(j, 1)
      // j--
    }
  }
}

// console.log('1.', arr)

/* 2. includes */
arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, NaN, NaN, true, true, undefined, undefined, null, null, Infinity, Infinity, '1', +0, -0, 0]
let arr1 = []

for(let i = 0; i < arr.length; i++) {
  if(!arr1.includes(arr[i])) {
    arr1.push(arr[i])
  }
}

console.log('2.', arr1)

/* 3. sort */
arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, NaN, NaN, true, true, undefined, undefined, null, null, Infinity, Infinity, '1', +0, -0, 0]
arr.sort((a, b) => a - b)

for(let i = 0; i < arr.length; i++) {
  if(arr[i] === arr[i + 1]) {
    arr.splice(i + 1, 1)
  }
}

// console.log('3.', arr)

/* 4. Set */
arr = [1, 2, 3, 4, 1, 2, 3, 5, 6, NaN, NaN, true, true, undefined, undefined, null, null, Infinity, Infinity, '1', +0, -0, 0]
arr = [...new Set(arr)]

// console.log('4.', arr)