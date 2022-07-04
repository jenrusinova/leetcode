/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    if (nums.length === 0){
      return -1;
    }
  
  let min = nums[0];
    let leftIndex = 0;
    let rightIndex = nums.length - 1;

    
  while (leftIndex <= rightIndex){
    
    
  //base case
 if (leftIndex < rightIndex){
   min = Math.min (nums[leftIndex], min);
 }
    
 let middleIndex = Math.floor((leftIndex + rightIndex)/2);
  min = Math.min (nums[middleIndex], min);
    
    if (nums[leftIndex] <= nums[middleIndex]){
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
    
    
  }//end of while
  return min;
  
};