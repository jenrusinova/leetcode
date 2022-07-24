/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    if (nums.length === 0) return 0;
  
    let maxDiff = -1;
    let minElem = nums[0];
  
  for(let i =0; i < nums.length; i++){
    if(nums[i] < minElem){
      minElem = nums[i];
    } else {
      maxDiff = Math.max(maxDiff, nums[i] - minElem);
            console.log(maxDiff);

    }
  }
  if (maxDiff > 0) {
    return maxDiff;
  } else return -1;
};