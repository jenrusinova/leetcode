/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentSub = nums[0];
  let maxSub = nums[0];
  
  for (let i =1 ; i < nums.length; i++){
  if (currentSub < 0){
    currentSub = nums[i];
  } else {
    currentSub = currentSub + nums[i];
  }
    maxSub = Math.max (maxSub, currentSub);
 
  }
  
  return maxSub;
  
}