/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //edge case
  if (nums.length === 0){
    return [];
  }
  
  let answers = [];
  answers[0] = 1;
  let product = 1;
  
  for (let i = 1; i < nums.length; i++){
    product = nums[i - 1] * answers[i - 1];
    answers[i] = product;
  }
  product = 1;
  
  console.log(answers); //1,1,2,6
  for (let i = nums.length - 1; i >=0; i--){
    answers[i] = answers[i]*product;
        product = product*nums[i];


  }
    return answers;
  
  
};