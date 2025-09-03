const { chunkArrayInFor, chunkArrayInWhile } = require ('../src/utils/array')

test('chunkArrayInFor should chunk array into smaller arrays of specified size', () => {
  const result = chunkArrayInFor([1, 2, 3, 4, 5], 2)
  expect(result).toEqual([[1, 2], [3, 4], [5]])
})

test('chunkArrayInWhile should chunk array into smaller arrays of specified size', () => {
  const result = chunkArrayInWhile([1, 2, 3, 4, 5], 2)
  expect(result).toEqual([[1, 2], [3, 4], [5]])
})// Example usage