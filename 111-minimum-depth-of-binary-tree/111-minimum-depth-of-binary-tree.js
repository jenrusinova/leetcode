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
var minDepth = function(root) {
    if (!root){
      return 0;
    }
  
   let queue = [root];
   let depth = 1;
  
    while (queue.length){  
    let len = queue.length;
      
    for(let i = 0; i < len; i++){
      let current = queue.shift();
      //return depth if we found a node without children
      if(!current.left && !current.right) return depth;
      
      if(current.left) queue.push(current.left);
      if(current.right)queue.push(current.right);
    }
      depth++;
  }
  
};