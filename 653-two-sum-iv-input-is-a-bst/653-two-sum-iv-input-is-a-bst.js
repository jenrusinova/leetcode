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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    if (root.length === 0) return false;
  
  let stack = [root];
  let arr = [];
  
  while (stack.length){
    let current = stack.pop();
    
    if (current) arr.push(current.val);
    
    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
  }
  
  arr.sort((a, b)=> a - b);
  
  console.log(arr);
  
  let lowIndex = 0;
  let highIndex = arr.length - 1;
  while (lowIndex < highIndex){
    if(arr[lowIndex] + arr[highIndex] === k){
      return true;
    } else if (arr[lowIndex] + arr[highIndex] < k){
      lowIndex++;
    } else highIndex --; 
  }
  return false;
  
  
};