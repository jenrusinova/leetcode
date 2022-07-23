/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  //conver string chars to lowercases
  
  let string = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  if (string.length === 0) return true;
  console.log(string);
  let left = 0;
  let right = string.length - 1;
while (left < right){
  
   console.log('left', string[left]);
    console.log('right', string[right]);

    
    if(string[left] !== string[right]){
      return false;
    }
    left++;
    right--;
  }
  return true;
  
  
//   let stack = [];
  
//   for (let i =0; i <= Math.floor(string.length/2) - 1; i++){
//     stack.push(string[i]);
//   }
  
//   for (let i = Math.floor(string.length/2); i<string.length; i++){
//     if (stack[stack.length - 1] === string[i] ){
//       stack.pop();
//     }
//   } 
//    return !stack.length;
};