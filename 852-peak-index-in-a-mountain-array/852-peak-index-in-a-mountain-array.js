/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    
let lowIndex = 0;
let highIndex = arr.length - 1;
let middle;

 while (lowIndex <= highIndex){
   middle = Math.floor((highIndex + lowIndex)/2);

   if (arr[middle - 1] < arr[middle] && arr[middle] > arr[ middle + 1]){
  return middle;     
   } else if (arr[middle + 1] > arr[middle]){
     //go right
     lowIndex = middle + 1;
   } else {
     //go left
     highIndex = middle - 1;
     
   }
 } 

  return - 1;
};