/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
  //edge case
    if (nums.length === 0 || threshold === 0){
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
    for(let i =0; i < nums.length; i++){
      max = Math.max(max, nums[i]);
    }
  
    //max is max number in input array
  
  let lowIndex = 1;
  let highIndex = max;
  let middle = +Infinity;
  
    while (lowIndex <=highIndex){

      console.log(lowIndex, highIndex);
      let currMiddleIndex = Math.floor((lowIndex + highIndex)/2);
      console.log('curr middle', currMiddleIndex);
      let currentSum = receiveSum(nums, currMiddleIndex);
      console.log('currentSum', currentSum);
      if(currentSum > threshold){
         console.log('move right');
         lowIndex = currMiddleIndex + 1;
       } else if (currentSum <= threshold) {
          console.log('move left');
          highIndex = currMiddleIndex - 1;
          //lowIndex = currMiddleIndex + 1;
        } else {
            return middle;
        }
       if (currentSum <= threshold){
      middle = Math.min(middle, currMiddleIndex);
      console.log('divisor to return', middle);
       }
    }//end of while
    
    return middle;
  
  
}