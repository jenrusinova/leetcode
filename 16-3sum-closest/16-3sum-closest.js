/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  
  nums.sort((a, b)=> a - b);
  let currDiff = 0;
  let minDiff = Infinity;
  
  for (let i =0; i < nums.length - 2; i++){
    let left = i + 1;
    let right = nums.length - 1;
    
    //check the sum and difference
    while (left < right){
      let sum = nums[i] + nums[left]+nums[right];
      let currDiff = Math.abs(target - sum);
      
       if (currDiff < Math.abs(target - minDiff)){
         minDiff = sum;
       }
      
      
      if (sum > target){
        right--;
      }else {
        left++;
      }
    }
  }
  return minDiff;
  
};