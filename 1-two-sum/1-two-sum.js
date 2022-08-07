/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let obj = {};
  
  for (let i =0; i < nums.length; i++){
    console.log(i);
    let diff = target - nums[i];
    
    for (let key in obj){
      if (obj[key] === diff){
        return [i, key];
      }
    }
    
        obj[i] = nums[i];

  }
};