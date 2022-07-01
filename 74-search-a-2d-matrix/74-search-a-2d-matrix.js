/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    
  if (matrix.length === 0){
     return false;    
  }
  
  let array = []; 
  
  array = matrix.flat();
  console.log(array);
  
  let middle = Math.floor(array.length/2);
  let lowIndex= 0;
  let highIndex = array.length - 1;
  
  while (lowIndex <= highIndex){
    middle = Math.floor((highIndex + lowIndex)/2);
    console.log(middle, array[middle]);
    if (array[middle] === target){
      return true;
    }else if (array[middle] < target){
      //go right
      lowIndex = middle + 1;
    } else {
      highIndex = middle - 1;
    }
  }
  
  return false;
  
  
};