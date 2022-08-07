/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    //edge case
  let counter = 0;
  
  for (let i =0; i < nums.length; i++){
    let item = nums[i];
    let strItem = item.toString();
    
    if (strItem.length % 2 === 0) counter++;
  }
  
  return counter;
};