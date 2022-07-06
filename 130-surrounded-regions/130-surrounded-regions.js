/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
let rows = board.length;
let cols = board[0].length;
let visited = [];
    
  let dfs = function (r, c, board){
     
    if (r < 0 || c < 0 || r ===rows || c ===cols || board[r][c] !== 'O'|| visited[(r, c)]){ 
      return;
    }
board[r][c] = 'A';
      dfs (r- 1, c, board);
      dfs (r + 1, c, board);
      dfs (r, c + 1, board);
      dfs (r, c - 1, board);
    
  }
  
  //check first and last row
  for (let i =0; i < cols; i++){
    dfs (0, i, board);
    dfs (rows - 1, i, board);
  }

   for (let i = 0; i < rows; i++){
     dfs (i, 0, board);
     dfs (i, cols - 1, board);      
   }
  console.log(board);
  for (let i = 0; i < rows;i++){
    for (let j =0; j < cols; j++){
      if (board[i][j] === 'A'){
        board[i][j] = 'O';
      } else {
         board[i][j] = 'X';
      }
    
  }
  
  }
};