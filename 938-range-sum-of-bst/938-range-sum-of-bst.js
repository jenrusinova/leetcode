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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    
  if (root === null){
    return 0;
  }
  
  let sum = 0;
  
  let stack = [];
  stack.push(root);
  
  while (stack.length){
    let current = stack.pop();
    if (current !== null){
      if (current.val >=low && current.val <=high){
        sum += current.val;
      }
      stack.push(current.left);
      stack.push(current.right);
      
      
    }
    
  }
  
  return sum;
};