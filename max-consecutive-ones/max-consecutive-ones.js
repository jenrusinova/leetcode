/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    //edge case
  if (nums.length === 0) return 0;
  
  let maxConNumber = 0;
  let counter = 0;

  for (let i =0; i < nums.length; i++){
    if (nums[i] === 1){
      counter++;
      maxConNumber = Math.max(maxConNumber, counter);
    } else {
      counter = 0;
    }
  }
  return maxConNumber;
};