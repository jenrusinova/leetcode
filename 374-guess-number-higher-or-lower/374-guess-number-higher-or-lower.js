/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {


  let low = 1;
  let high = n;
  
  while (low <= high){
    let middle = Math.floor( (low + high)/2);
   
       let answer = guess (middle);

  if (answer === 0) {
   return middle;
   }else if (answer === 1){
 
     console.log('go left');
    low = middle + 1;
   } else {
     console.log('go right');
   high = middle - 1;
   }
    
  }
   return -1;
};