/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost = [];
    minCost[0] = 0;
    minCost[1] = 0;
    
  for (let i = 2; i < cost.length + 1; i++){
    let oneStep = minCost[i - 1] + cost [i - 1];
    let twoSteps = minCost[i - 2] + cost[ i - 2];    
    minCost[i] = Math.min(oneStep, twoSteps);
    
  }
  return minCost[minCost.length - 1];
  
};