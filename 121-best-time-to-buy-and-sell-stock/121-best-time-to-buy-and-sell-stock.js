/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minValue =  Infinity;
   
    let maxDiff = 0;
    
  for(let i =0; i < prices.length; i++){
    if (prices[i] < minValue){
      minValue = prices[i];
    } else {
        maxDiff = Math.max(maxDiff, prices[i] - minValue);

    }
    
  }
  
  return maxDiff;
   
};