/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxDiff = 0;
    
    for (let i = 0; i < prices.length - 1; i++){
      if(prices[i + 1] > prices[i]){
        maxDiff += prices[i +1] - prices[i];
      }
    }
  return maxDiff;
  
};