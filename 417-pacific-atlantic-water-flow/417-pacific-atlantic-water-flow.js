/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
  
  let answer = [];
    
  let rows = heights.length;
  let cols = heights[0].length;
  
  let pacific = new Array(rows).fill().map((v) => new Array(cols).fill(false));
  let atlantic = new Array(rows).fill().map((v) => new Array(cols).fill(false));
  console.log(atlantic);
  
	function dfs (r, c, visited, prevHeight) {
    
		if (r < 0 || c < 0 || r ==  rows|| c == cols) return;
		if (visited[r][c] || heights[r][c] < prevHeight) return;
		visited[r][c] = true;
		dfs(r + 1, c, visited, heights[r][c]);
		dfs(r - 1, c, visited, heights[r][c]);
		dfs(r, c + 1, visited, heights[r][c]);
		dfs(r, c - 1, visited, heights[r][c]);
	}; 
  
 
  
  for (let i = 0; i < cols; i++){   
    
    dfs (0, i, pacific, heights[0][i]);
    dfs(rows - 1, i, atlantic, heights[rows - 1][i]);
  }
  
  for (let i =0; i < rows; i++){
    dfs(i, 0, pacific, heights[i][0]);
    dfs(i, cols - 1, atlantic, heights[i] [cols - 1]);
  }
  
  for (let i =0 ; i < rows; i++){
    for (let j =0; j < cols; j++){
      if (pacific[i][j] && atlantic[i][j]){
         answer.push([i, j]);
                                                                     }
    } 
  }
  
return answer;
  
};
  
  