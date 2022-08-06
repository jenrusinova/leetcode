/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
     var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romans= ["M",  "CM","D", "CD", "C","XC","L","XL", "X", "IX", "V", "IV", "I"];


 let answer = '';

 while (num !== 0){
   
   for (let i =0; i < numbers.length; i++){
     let numOfUnits= num/numbers[i];
     
     for (let j =1; j <= numOfUnits; j++){
       answer += romans[i];
     }
     
     num = num % numbers[i];
     
   }
   
 }
return answer;
   
 }