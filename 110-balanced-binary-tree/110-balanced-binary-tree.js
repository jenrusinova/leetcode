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
 * @return {boolean}
 
  General idea is iteratively traverse on binary tree from bottom to top and check height difference for every node

 - We creating 2 storages - one is temporal stack created just to reverse our tree. The put nodes in reversed order in the second storage.
 - In the second storage we go from the bottom (using pop() method) 
 - For the every node we are creating new property 'height' - its the maxHeight 
 - We are checking height difference between left and right children of the current node and return false if difference is > 1
 
 */
var isBalanced = function(root) {
  //Base case - if there is no root return null
   if (!root){
     return null;
   }
  //creating storage just to pass nodes in the second storage in the reversed order
   let tempStorage = [];
   let storage = [];
  
  //initializing the temp storage
   tempStorage.push(root);
   
  //we are iterating until we've got any node inside temporal storage. If it's empty, it means we passed all the nodes in the tree in the second storage
  
    while (tempStorage.length){
     //taking node from the right  
    let current = tempStorage.pop();
      //pushing it to the main storage
    storage.push(current);
    
      //checking if current node has kids and if yes, pushing it to the current storage
    if(current.left) tempStorage.push(current.left);
    if(current.right) tempStorage.push(current.right);
  }
  console.log(storage);
  
  //we are iterating until we've got no nodes left. If the storage is empty it means we finished tree traversal
  while (storage.length){
    //taking node from the right
    let current = storage.pop();
    
    //by default the heights of the both sides are 0
    let rightH = 0;

    let leftH = 0;
    
    //if the got children on the left, the height of the left side is the height of children on the left plus 1
    if (current.left){
      leftH =  current.left.height;
    }
    if (current.right){
      rightH =  current.right.height;
    }
    //current height will be maximum from left and right side
    current.height = Math.max(leftH, rightH) + 1;
    
    //checking difference and returning false if difference is more than 1
    let hightDiff = Math.abs(leftH - rightH);
    if(hightDiff > 1) return false;
      
  }
  
  return true;
  
};