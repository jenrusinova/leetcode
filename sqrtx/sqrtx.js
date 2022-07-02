/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    
  let lowIndex = 0;
  let highIndex = x;
  let answer = -Infinity;
  
  while (lowIndex <= highIndex){
    let middleIndex = Math.floor((lowIndex + highIndex)/2);
    
    console.log(middleIndex);
    if (middleIndex * middleIndex > x) {
      //go left
      highIndex = middleIndex - 1;
    }else if(middleIndex * middleIndex < x) {
      lowIndex = middleIndex + 1;
    } else return middleIndex;
    
    if(middleIndex * middleIndex < x){
       answer = Math.max(answer, middleIndex);
console.log('answer', answer);
    }
  }
  return answer;
};