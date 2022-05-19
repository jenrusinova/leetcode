/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
 
  let reverse = function reverse (array, startIndex, endIndex){
    while (startIndex < endIndex) {
      let temp = nums[startIndex];
       array[startIndex] = array[endIndex];
       array[endIndex] = temp;
       startIndex ++;
       endIndex --;     
      
    }
  
  }
  k = k % nums.length;
  reverse (nums, 0, nums.length - 1);
  reverse (nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
   return nums;
      
};