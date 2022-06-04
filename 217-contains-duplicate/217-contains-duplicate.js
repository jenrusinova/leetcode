/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
  
    for (let i = 0; i < nums.length; i++){
      obj[nums[i]] = 1;
    }
  
    if (Object.keys(obj).length === nums.length){
      return false;
    }
  
  return true;
};