/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
      return 0;
    }
  
  let queue = [root];
  let depth = 0;
  
  while (queue.length){
    let len = queue.length;
    for (let i =0; i < len; i++){
      let current = queue.shift();
      // if(current === null){
      //    depth++;
      // }
      
      if(!current.children) return depth;
      if(current.children){
         for (let j =0; j < current.children.length; j++){
            queue.push(current.children[j]);
         }
      }
    }
    depth++;
    
  }
  return depth;
};