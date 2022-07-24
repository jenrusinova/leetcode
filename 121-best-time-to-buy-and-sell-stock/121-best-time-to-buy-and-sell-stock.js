/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    //edge case
  if (prices.length === 0){
    return 0;
  }
  
  let maxProfit = 0;
  let minPrice = prices[0];
  
  for(let i =0; i < prices.length; i++){
    if(prices[i] < minPrice){
      minPrice = prices[i];
    } else {
      maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
  }
  
  return maxProfit;
};