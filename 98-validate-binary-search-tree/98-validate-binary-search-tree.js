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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if(!root){
    return false;
  }
  
  let stack = [[root, -Infinity, Infinity]];
  
  while (stack.length){
    let [current, low, high] = stack.pop();
    if(current.val >=high || current.val <=low){
      return false;
    }
    if(current.left) stack.push([current.left, low, current.val]);
    if(current.right) stack.push([current.right, current.val, high]);
  }
  
  return true;
};