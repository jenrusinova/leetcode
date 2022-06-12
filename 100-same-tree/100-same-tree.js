/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isSame = true;
  
    if (p === null && q === null){
      return true;
    }
  
   let firstStack = [];
   firstStack.push(p);
  
   let secondStack = [];
   secondStack.push(q);
  
   while (firstStack.length && secondStack.length){
     let firstCurr = firstStack.pop();
     let secondCurr = secondStack.pop();
     
     if(firstCurr !== null && secondCurr !== null) {
        if (firstCurr.val !== secondCurr.val) {
          isSame = false;
        }
       firstStack.push(firstCurr.left);
       firstStack.push(firstCurr.right);
       
       secondStack.push(secondCurr.left);
       secondStack.push(secondCurr.right);
     } else if (firstCurr === null && secondCurr !== null){
       isSame = false;
      }else if (firstCurr !== null && secondCurr === null){
        isSame = false;
      }
   } 
   return isSame;
  
};