/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
  
   let obj = {
        M: 1000,
        D: 500,
        C: 100,
        L: 50,
        X: 10, 
        V: 5,
        I: 1
    }
   
   for (let i =0; i < s.length; i++){
     if (obj[s[i]] <obj[s[i + 1]]){
       answer -= obj[s[i]];
     } else {
       answer += obj[s[i]]
     }
   }
  return answer;
};