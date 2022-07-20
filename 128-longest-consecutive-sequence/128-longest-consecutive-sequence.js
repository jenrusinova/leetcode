/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {

  
  if (nums.length === 0) return 0;
  
  nums = nums.sort((a, b) => a - b);
 
  console.log(nums);
  let maxCounter = 1;
  let currentCounter = 1;
  
  for(let i =1; i < nums.length; i++){
    if (nums[i - 1] === nums[i]) continue;
    if (nums[i - 1] + 1 === nums[i]){
      currentCounter++;
    }
      
     else {
      maxCounter = Math.max(maxCounter, currentCounter);
    currentCounter = 1;
    }
  }

     return  Math.max(maxCounter, currentCounter);


   
};