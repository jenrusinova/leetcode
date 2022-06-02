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
 * @return {TreeNode}
 
 A couple of important things:
 - we are swapping the nodes on the tree itself, not in the queue
 - queue is the storage that helps us to iterate on all the nodes 
 - every iteration we check the most left node in the queue, swapping its children and pushing its children to the right of the queue
 */


var invertTree = function(root) {
  //Edge case - if we don't have root, we'll return null  
  if (!root){
    return null;
  }
  //Create empty storage for nodes
  let queue = [];
  //put there the first node
  queue.push(root);
  
  //We are going to push every tree node to the queue and delete the left one every iteration. If the queue is empty it means we don't have any more nodes to swap and can return the inverted tree.
  while (queue.length){
    
    //take the most left node
   let node = queue.shift();
    
  //swapping its left and right
  [node.left, node.right] = [node.right, node.left];
    
    //now we need to put at the right side of the queue this swapped children if they exists
    if(node.left){
      queue.push(node.left);
    }
    if(node.right){
    queue.push(node.right);
    }
    
  }
  //now queue is empty and we can return the root of inverted tree
  return root;
    
};