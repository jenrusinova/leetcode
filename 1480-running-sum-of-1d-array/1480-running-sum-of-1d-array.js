/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    if (nums.length === 0){
      return 0;
    }
  
    let result = [];
  
  let currentSum = 0;
  
    for (let i =0; i < nums.length; i++){
       currentSum+=nums[i];
       result.push(currentSum);
    }
  
  
  return result;
};