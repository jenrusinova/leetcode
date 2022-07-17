/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    //edge case 
  if (nums.length === 0){
    return [];
  }
  let obj = {};
  //O(n)
  for (let i =0; i < nums.length; i++){
    if (obj[nums[i]] === undefined){
      obj[nums[i]] = 1;
    } else obj[nums[i]]++;
  }
  //(O (nlog n))
  let sortedKeys = Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
   console.log(sortedKeys);
  
  return sortedKeys.slice(0, k);
};
// Time complexity is O(nlogn)
