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

      let currMiddleIndex = Math.floor((lowIndex + highIndex)/2);
      let currentSum = receiveSum(nums, currMiddleIndex);
      if(currentSum > threshold){
         lowIndex = currMiddleIndex + 1;
       } else if (currentSum <= threshold) {
          highIndex = currMiddleIndex - 1;
         
        } else {
            return middle;
        }
       if (currentSum <= threshold){
      middle = Math.min(middle, currMiddleIndex);
       }
    }//end of while
    
    return middle;
  
  
}