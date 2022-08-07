/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  //O n log n
  nums.sort((a, b) => a - b);
  
  let result = [];
  
  
  for (let i =0; i < nums.length - 2; i++){
    let left = i + 1;
    let right = nums.length - 1;
    
    //get rid of duplicates
    if (i > 0 && nums[i] === nums[i -1]){
      continue;
    }
    
    while (left < right){
      let sum = nums[i] + nums[left] + nums[right];
      
      if (sum === 0){
        result.push([nums[i], nums[left], nums[right]]);
        
        //get rid of left and right duplicates
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1])right--;
        left++;
        right--;
        
      } else if (sum < 0){
        left++;
      } else {
        right--;
      }
    }
  }
  console.log(result);
    return result;
};