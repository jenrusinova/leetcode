/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let length = nums.length;
  
  let left = [];
  left[0] = 1;
  let right = [];
  
  let answer = [];
  
  for (let i =1; i < length; i++){
    left.push(nums[i - 1] * left[i - 1]);
  }
  console.log(left);
  
  right[length - 1] = 1;
  for (let i = length - 2; i >=0; i--){
    right [i] = right [i+ 1] * nums[i + 1];
  }
 console.log(right);
  
  for (let i = 0; i < left.length; i++){
    answer[i] = left[i] * right[i];
  }
  
  return answer;
  
};