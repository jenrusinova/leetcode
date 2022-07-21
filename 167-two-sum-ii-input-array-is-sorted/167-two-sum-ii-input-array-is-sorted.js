/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
   // if (numbers.length === 0) return 0;
  
  let lowIndex = 0;
  let highIndex = numbers.length - 1;
  
  while (lowIndex < highIndex){
    let sum = numbers[lowIndex] + numbers[highIndex];
    
    if (sum === target) {
      return [lowIndex + 1, highIndex + 1];
    } else if (sum > target){
      highIndex--;
    }else lowIndex++;
  



}
}

