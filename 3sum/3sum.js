/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort((a, b) => a - b);
  

  let answers = [];
  
  for (let i =0; i<nums.length - 2; i++ ){
  
    if(i > 0 && nums[i] === nums[i-1]){
            continue;
    }
    
    let left = i + 1;
    let right = nums.length - 1;
    
    while (left < right){
      if (nums[i] + nums[left] + nums[right] === 0){
        answers.push([nums[i], nums[left], nums[right]]);
        
        while(left < right && nums[left] === nums[left+1]) left++;
        while(left < right && nums[right] === nums[right-1]) right--;
        
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] > 0) right--;
      else left++;
      
    }
  }
  return answers;
};