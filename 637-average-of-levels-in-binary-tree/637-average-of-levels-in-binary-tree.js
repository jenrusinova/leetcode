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
var averageOfLevels = function(root) {
    if (!root){
      return 0;
    }
  let answers = [] ;
  let queue = [root];
  
  while (queue.length){
    let len = queue.length;
    let sum = 0; //sum of all nodes at current level
    for(let i =0; i < len; i++){
      let current = queue.shift();
      sum+= current.val;
      if(current.left) queue.push(current.left);
      if(current.right)queue.push(current.right);
    }
    answers.push(sum/len);
  }
  console.log(answers);
  return answers;
      
      
};