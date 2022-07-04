/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length === 0){
      return -1;
    }
      
      let leftIndex = 0;
      let rightIndex = nums.length - 1;
      
      while (leftIndex <= rightIndex){
             
      
                
       let  middle= Math.floor((leftIndex + rightIndex)/2);
console.log('middle', middle);
        
          if (target === nums[middle]){
         return middle;
      }   
        
        
        //search if left array
        if (nums[leftIndex] <= nums[middle]){ 
          console.log('at left portion');
          
          if (target < nums[leftIndex] || target > nums[middle]) {
            leftIndex = middle + 1
          }//end of 25 if
          else  {
            rightIndex = middle - 1;
          }
           
          
        } //search in right array
        
        else {
          console.log('at right portion');
            if (target < nums[middle] || target > nums[rightIndex]){
                rightIndex = middle - 1
            }//end of 32 if
            else {
              leftIndex = middle + 1;
            }
            
                                                      
        }//end of 31 else
             
        
      }//end of while
      return - 1;
};