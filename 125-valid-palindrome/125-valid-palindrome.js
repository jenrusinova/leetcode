/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
 
  
  if(string.length === 1){
    return true;
  } else if (string.length === 2){
  
    return string[0] === string[1];
  }
  

  let stack = [];
  
    //iterate on first half of s.length - 1
  for (let i =0; i < string.length/2; i++){
    stack.push(string[i]);
  }
    
  for(let i = Math.floor(string.length/2); i < string.length; i++){
    if (stack[stack.length - 1] === string[i]){
      stack.pop();
    }
  }

   return !stack.length
};