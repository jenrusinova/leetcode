/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  let windowSum = 0;
  let minLength = Infinity;
  let startIndex = 0;
  
  for (let endIndex = 0; endIndex <= nums.length - 1; endIndex++){
    windowSum +=nums[endIndex];
    
    while(windowSum >= target){
      minLength = Math.min(minLength, endIndex - startIndex + 1);
      windowSum -= nums[startIndex];
      startIndex++;
    }
    
  }
  
  if (minLength === Infinity){
    return 0;
  }

    return minLength;
  
};