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
       return null; 
    }
  
  
  //stack for tree traversal  
  let stack = [root];
  
  //map for parent pointers
  let parent = new Map();
  parent.set(root, null); 
  
  //iterate untill we'll find both the nodes p and q
  while (!parent.has(p) || !parent.has(q)){
   
    let node = stack.pop();
    
    //while traversing the tree, keep saving the parent pointers
    if (node.left !== null){
      parent.set(node.left, node);
      stack.push(node.left);
    }
    
    if (node.right !== null){
      parent.set(node.right, node);
      stack.push(node.right);
    }
  }
  //console.log('parent', parent);
  //ancestors set for node p
  let anc = new Set();
  
  while (p !== null){
    anc.add(p);
    p = parent.get(p);
  }
  
  while (!anc.has(q)){
    q = parent.get(q);
   
  }
  
   return q;
  
  
   
};