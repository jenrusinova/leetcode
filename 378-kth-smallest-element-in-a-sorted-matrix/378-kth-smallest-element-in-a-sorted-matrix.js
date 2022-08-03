/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {

  let arr = matrix.flat().sort((a, b) => a - b);
  return arr[k - 1];

};