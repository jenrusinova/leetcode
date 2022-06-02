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
var isBalanced = function(root) {
   if (!root){
     return null;
   }
  
   let tempStorage = [];
   let storage = [];
   tempStorage.push(root);
   
  while (tempStorage.length){
    let current = tempStorage.pop();
    storage.push(current);
    
    if(current.left) tempStorage.push(current.left);
    if(current.right) tempStorage.push(current.right);
  }
  
  while (storage.length){
    let current = storage.pop();
    let rightH = 0;

    let leftH = 0;
    
    if (current.left){
      leftH = 1 + current.left.height;
    }
    if (current.right){
      rightH = 1 + current.right.height;
    }
    current.height = Math.max(leftH, rightH);
    
    let hightDiff = Math.abs(leftH - rightH);
    if(hightDiff > 1) return false;
    
  
  }
  
  return true;
  
};