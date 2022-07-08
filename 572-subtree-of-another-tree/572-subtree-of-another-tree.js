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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    
   if (!root || !subRoot){
     return false;
   }
  
    function isSame(tree1, tree2){
   let isSame = true;
    
     let queue1 = [];
     let queue2 = [];
    
    queue1.push(tree1);
    queue2.push(tree2);
    
    while (queue1.length && queue2.length){
       let current1 = queue1.shift();
       let current2 = queue2.shift();
      
      
      if (current1 !== null && current2 !== null){
     
        if (current1.val !== current2.val){
          isSame = false;
        }
        queue1.push(current1.left);
        queue1.push(current1.right);
        
        queue2.push(current2.left);
        queue2.push(current2.right);
      } else if (current1 === null && current2 !== null){

         isSame = false;
      } else if (current1 !== null && current2 === null){
    
        isSame = false;
      }
    }
    return isSame;
    
  }
   
  
   let queue = [];
   queue.push(root);
  while (queue.length){
    let current = queue.shift();
    if (current!== null){
       if(current.val === subRoot.val){
console.log(current.val);
        if(isSame(current, subRoot)) return true;
       } 
      queue.push(current.left);
     queue.push(current.right);
    }
    
  }
  

  
  return false;
  
};