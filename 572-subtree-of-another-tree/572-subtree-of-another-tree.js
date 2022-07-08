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
      
      //console.log('current1=', current1);
      //console.log('current2=', current2);
      
      if (current1 !== null && current2 !== null){
     
        if (current1.val !== current2.val){
          console.log('59');
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
    //console.log('isSame=', isSame);
    return isSame;
    
  }
  
  
  
   let queue = [];
   queue.push(root);
  while (queue.length){
    let current = queue.shift();
    
       if(current.val === subRoot.val){
console.log(current.val);
        if(isSame(current, subRoot)) return true;
       } 
      if(current.left) queue.push(current.left);
      if(current.right)queue.push(current.right);
    
  }
  

  
  return false;
  
};