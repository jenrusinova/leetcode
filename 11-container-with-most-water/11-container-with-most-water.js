/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if (height.length === 0) return 0;
  
    let maxSum = 0
  
    let leftIndex = 0;
    let rightIndex = height.length - 1;
  
   while (leftIndex < rightIndex){
     let currentSum = Math.min (height[leftIndex], height[rightIndex]) * (rightIndex - leftIndex);
     maxSum = Math.max(currentSum, maxSum);
     
 
      if (height[leftIndex] > height[rightIndex]) rightIndex--;
     else leftIndex++;
     
   
};
       return maxSum;

};

