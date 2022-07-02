/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
      //edge case
    if (piles.length === 0 || h === 0){
      return -1;
    }
    
    //helper function
    function receiveSum(arr, number){
      let result = 0;
      
      for (let i =0; i < arr.length; i++){
        if(arr[i] <= number){
           result+=1;
        }else {
           result+= Math.ceil(arr[i]/number);
        }
      }
      
      return result;
    }
  
  //end of helper function
  
    let max = -Infinity;
    for(let i =0; i < piles.length; i++){
      max = Math.max(max, piles[i]);
    }
  
    //max is max number in input array
  
  let lowIndex = 1;
  let highIndex = max;
  let middle = +Infinity;
  
    while (lowIndex <=highIndex){

      let currMiddleIndex = Math.floor((lowIndex + highIndex)/2);
      let currentSum = receiveSum(piles, currMiddleIndex);
      if(currentSum > h){
         lowIndex = currMiddleIndex + 1;
       } else if (currentSum <= h) {
          highIndex = currMiddleIndex - 1;
       }
       if (currentSum <= h){
      middle = Math.min(middle, currMiddleIndex);
       }
    }//end of while
    
    return middle;
};