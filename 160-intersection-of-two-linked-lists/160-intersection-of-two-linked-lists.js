/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
  if (headA === null || headB === null){
    return null;
  }
  
   let visited = new Map();
  
  while (headB !== null){
    visited.set(headB, headB);
    headB = headB.next; 
   }
  
  while (headA !== null){
    if (visited.has(headA)){
      return headA;
    }
    headA = headA.next;
  }  
  
};