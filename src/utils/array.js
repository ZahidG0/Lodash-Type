// Use For Loop to chunk array
function chunkArrayInFor(array, size) {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

// Use While Loop to chunk array
function chunkArrayInWhile(array, size) {
  const result = [];
  let i = 0;
  while (i < array.length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}
// Test cases
/* console.log(chunkArrayInFor([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArrayInFor([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
console.log(chunkArrayInWhile([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArrayInWhile([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]
 */


module.exports = { chunkArrayInFor, chunkArrayInWhile, };