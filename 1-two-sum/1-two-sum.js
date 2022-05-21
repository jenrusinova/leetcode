/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  var obj = {};
    for(var i =0; i < nums.length; i++){
      var diff = target - nums[i];
      for(var key in obj){
        if (obj[key] === diff){
          return [key, i]}
      }
      obj[i] = nums[i]
    }
};