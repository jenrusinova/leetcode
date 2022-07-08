/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root.length === 0){
       return -1;
    }
  
  let queue = [];
  queue.push(root);
  
    while( queue[0] ) {
    root = queue.shift();
    
    if( p.val < root.val && q.val < root.val )
        queue.push(root.left)
    else if( p.val > root.val && q.val > root.val )
        queue.push(root.right)
    else
        break
        
}

return root
};