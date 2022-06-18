/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length){
    return 0;
  }
  
  let counter = 0;
  
  let rows = grid.length;
  let columns = grid[0].length;
  
  
  let dfs = function dfs(grid, r, c){
       if (r < 0 || c < 0 || 
           r >= rows || c >= columns ||
           grid[r][c] === '0') {
            return;
        }
    
    grid[r][c] = '0';
    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
  }
  
  for (let i =0; i < rows; i++){
    for (let j =0; j < columns; j++){
       if (grid[i][j] === '1'){
         counter++;
         dfs(grid, i, j);
       }
    }
  }
  
  return counter;   
    
};