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
 * @return {number[]}
 */
var getLonelyNodes = function(root) {
    if (root === null){
      return null;
    }
  
    let stack = [];
  let result = [];
    stack.push(root);
    
    while (stack.length){
      let current = stack.pop();
      if(current !== null){
             console.log(current.val);
      
        if (current.left === null && current.right !== null){
          result.push(current.right.val);
        } else if (current.left !== null && current.right === null){
           result.push(current.left.val);
        }
        
        
        
        
        
        
      stack.push(current.left);
      stack.push(current.right);
      }
    }
  
  return result;
  
};