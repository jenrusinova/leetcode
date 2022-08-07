/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
  
  let len = arr.length;
    
  for (let i =0; i < arr.length; i++){
    if (arr[i] === 0){
      arr.splice(i, 0, 0);
      i++;
    }
  }
  
  if (arr.length > len){
    let diff = arr.length - len;
    while (diff > 0){
      arr.pop();
      diff--;
    }
  }
  
};