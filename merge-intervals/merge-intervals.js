/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //O (n log n)
  intervals = intervals.sort((a, b) => a[0] - b[0]);
  
  let merged = [];
  //O(n)
  for(let i = 0; i < intervals.length; i++){
  

    if(!merged.length || merged[merged.length - 1][1] < intervals[i][0]){
      merged.push(intervals[i]);
    }else{
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intervals[i][1]);
    }
            
  }
  return merged;
};