/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
  
  if (cloned === null){
    return null;
  }
  
  let stack = [];
  stack.push(cloned);
  
  while(stack.length){
    
    let current = stack.pop();

      if (current!= null) {
         if(current.val == target.val){
            return current;
         }  
        stack.push(current.left);
        stack.push(current.right);
         
      } 
    }
  }
  
  
