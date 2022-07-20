/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    if (nums.length === 0) return false;
  
    let set = new Set(nums);
    let arr = Array.from(set);
  
  return arr.length !== nums.length;
};