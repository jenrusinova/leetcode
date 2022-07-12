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
 * @return {number}
 */
var kthSmallest = function(root, k) {
    // if (!root || k < 1){
    //   return -1;
    // }
  
  let stack = [root];
  let values = [];
  
  while(stack.length){
    let current = stack.pop();
    if(current) values.push(current.val);
    
    if(current.left) stack.push(current.left);
    if(current.right) stack.push(current.right);
  }
  values.sort(function(a, b){
    return a - b;
  })
    console.log(values);

  let answer = values[k - 1];
  console.log(answer);
  return answer;
};