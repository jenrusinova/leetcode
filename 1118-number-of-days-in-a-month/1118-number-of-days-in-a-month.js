/**
 * @param {number} year
 * @param {number} month
 * @return {number}
 */
var numberOfDays = function(year, month) {
  
  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
  if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
    if (month === 2)return 29;
    else return months[month - 1];
   } else 
     return months[month - 1];
  
  
};