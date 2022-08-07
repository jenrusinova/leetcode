/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
  
  let squared = [];
    
  for (let i =0; i < nums.length; i++){
    squared.push(nums[i] * nums[i]);
  }
  
  let sorted = squared.sort((a, b)=> a - b);
  
  return sorted;
                        
};