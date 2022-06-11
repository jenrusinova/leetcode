/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

  if (root === null) {
    return 0;
  }
  let answer = 0;
  
  let stack = [];
  stack.push(root);
  
  let depth = [];
  depth.push(1);
  
  while (stack.length){
    let current = stack.pop();
    let currentDepth = depth.pop();
    
    if(current !== null){
      answer = Math.max(currentDepth, answer);
      stack.push(current.left);
      depth.push(currentDepth + 1);
      stack.push(current.right);
      depth.push(currentDepth + 1); 
        
    }
  
  }

return answer;
  

  
 
};