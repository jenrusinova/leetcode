/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
  let lowIndex = 0;
  let highIndex = nums.length - 1;
  
  while (lowIndex <= highIndex){
    let middleIndex = Math.floor ((highIndex + lowIndex)/2);
    
    if (target === nums[middleIndex]){
      return middleIndex;
    } else if (target > nums[middleIndex]){
       lowIndex = middleIndex + 1;
    } else {
        highIndex = middleIndex - 1;
    }
  }
  return -1;
};