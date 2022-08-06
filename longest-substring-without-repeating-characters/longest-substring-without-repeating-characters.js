/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;

  let left = 0;
  let right = 0;
  let max = 0;
  let obj = {};
  
  while (right < s.length){
    
    let char = s[right];
    if (obj[char] === undefined){
      obj[char] = 1;
      max = Math.max(max, right - left + 1);   
      right++;

      
    }else {
       delete obj[s[left]];
       left++;
     }
  
  }
  return max;
   
};