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
  for (let i =0; i < nums.length; i++){
    if (obj[nums[i]] === undefined){
      obj[nums[i]] = 1;
    } else obj[nums[i]]++;
  }
  //obj = {1: 3, 2: 2, 3:1 }
  console.log('obj', obj);
  //check values in obj, if they are in  max + 1 - k range
  //push keys in arr and return it
  
  let sortedKeys = Object.keys(obj).sort((a,b)=>obj[b]-obj[a]);
   console.log(sortedKeys);
  
  return sortedKeys.slice(0, k);
};