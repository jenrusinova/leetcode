/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length === 0) return false;
  
    let stack = [];
  
  function findPair(bracket){
    if (bracket === ']') return '[';
    if (bracket === ')') return '(';
    if (bracket === '}') return '{';


  }
  
 for (let i =0; i < s.length; i++){
   let char = s[i];
   if (char === '{' || char === '[' || char === '('){
     stack.push(char);
   }else if (stack.length === 0 || stack.pop() !== findPair(char)){
      return false;     
 }
  
 }
  return stack.length === 0;
};