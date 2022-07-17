/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    //edge case
  if (nums.length === 0){
    return 0; 
  }
  //O (n log n)
  let sortedNums = nums.sort((a, b)=> b - a);
  console.log(sortedNums);
  let answer = sortedNums.splice(k - 1, 1);
  return answer;
};
//Time complexity is O(nlog(n))
//Space complexity O(n)