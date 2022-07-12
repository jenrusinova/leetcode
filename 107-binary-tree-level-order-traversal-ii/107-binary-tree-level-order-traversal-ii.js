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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root){
      return [];
    }
  
    let queue = [root];
  let answers = [];
  
  while (queue.length){
    let len = queue.length;
    let row = [];
    
    for (i =0; i < len; i++){
      let current = queue.shift();
      row.push(current.val);
      if(current.left) queue.push(current.left);
      if(current.right) queue.push(current.right);
    }
    answers.unshift(row);
  }
  console.log(answers);
  return answers;
};