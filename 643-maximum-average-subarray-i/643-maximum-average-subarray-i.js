/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  if(nums.length === 1){
    return nums[0];
  }
  let maxSum = - Infinity;
  let start = 0;
  let sum = 0;
  
  for (let end = 0; end < nums.length; end++){
    sum +=nums[end];
    if(end >= k - 1){   
      maxSum = Math.max(sum/k, maxSum);
      sum = sum - nums[start];
      start = start + 1;
    } 
    
  }
  return maxSum;
  
  
};