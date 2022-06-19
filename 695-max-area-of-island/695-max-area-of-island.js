/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  if (!grid.length){
    return 0;
  }

  let maxArea = 0;


  let rows = grid.length;
  let columns = grid[0].length;
  
function dfs(grid, r, c){
    let currentArea = 0;

    if (r < 0|| c < 0 ||
       r >= rows || c >= columns ||
        grid[r][c] === 0
       )
    {   return 0;} 
  
  
    grid[r][c] = 0;
    currentArea++;
    
    currentArea += dfs(grid, r + 1, c);
    currentArea += dfs(grid, r - 1, c);
    currentArea += dfs(grid, r, c + 1);
    currentArea += dfs(grid, r, c - 1);
        
    return currentArea;
  }
  
  
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++){
      if (grid[i][j] === 1){
let counter = dfs(grid, i, j);
        maxArea = Math.max(counter, maxArea);
console.log(maxArea);
      }
    }
  }
  
  return maxArea;
  
};