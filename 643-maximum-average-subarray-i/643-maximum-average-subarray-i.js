/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (k <= nums.length){
      const sumsArr = [];
      for (let i =0; i < nums.length - k + 1; i++){
        let sum = 0;
        for (let j = i; j < i + k; j++){
          sum+=nums[j];
                    
        }
          sumsArr.push(sum/k);
      }
        sumsArr.sort(function (a, b) {
          return b - a;});
          
      return sumsArr[0];
          
    }
};