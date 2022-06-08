/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  
if (nums.length === 0){
    return 0;
  }
  
  let currentMax = nums[0];
  let currentMin = nums[0];
  let result = currentMax;
  
  for (let i =1; i < nums.length; i++){
    let current = nums[i];
    let tempMax = Math.max(current, Math.max(currentMax * current, currentMin * current));
    currentMin = Math.min (current, Math.min(currentMax * current, currentMin * current));
    currentMax = tempMax;
    result = Math.max(result, currentMax);
  }
  
  return result;
};