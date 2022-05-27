/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
  
  
  for (let i =0; i < s.length; i++){
  
    if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
    stack.push(s[i]);
    } else if (stack.length === 0 || stack.pop()!== foundPair(s[i])){
return false;
    }

    
  
  }
  
  return stack.length === 0;
  

  function foundPair(ch){
  if(ch === ')'){
    return '(';
  }
    
  if(ch === ']') {
  return '[' 
  } 
    
    return '{'
    
  }

};