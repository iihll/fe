/* 1. reduce */
function flatten(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? flatten(item) : item)
  }, [])
}

console.log(flatten([1, [2, 3, [4, 5], NaN, [1, NaN]]]))