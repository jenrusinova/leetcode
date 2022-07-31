/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let left = 0;
  let right = 0;
  
  let maxFreqLetter = 0;
  let maxLen = 0;
  let obj = {};
  
  while (right < s.length){
    
   if (obj[s[right]] === undefined){
     obj[s[right]] = 1;
   } else {
     obj[s[right]]++;
   }
    maxFreqLetter = Math.max(maxFreqLetter, obj[s[right]]);
    console.log(maxFreqLetter);
    //while we still can replace letters shift left pointer and decrement its count
    
    while((right - left + 1) - maxFreqLetter > k){
      if (obj[s[left]]=== 1){
        delete obj[s[left]];
      }else {
        let value = obj[s[left]];
        obj[s[left]] = value - 1;
      }
      
      left ++;
    }

    maxLen = Math.max(maxLen, right-left+1);
    right++;
       
      
  }
  if (maxLen === 0) return 0;
  else return maxLen;
  
};