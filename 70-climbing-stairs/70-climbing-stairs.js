/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n === 1) {
           return 1;
        }
    if (n === 2) {
        return 2;
    }
  
  let current = 0;
  
    let one = 2;
    let two = 1;
    for (let i = 2; i < n; i++) {
      current = one + two;
      two = one;
      one = current;
    }
    return current;
};