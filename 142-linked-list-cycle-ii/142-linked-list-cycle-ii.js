/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {

 if (!head) {
   return null;
 }
  let current = head;
  let map =  new Map();
  while (current){
    if(map.has(current)){
       return current;
    }
    map.set(current);
current = current.next;
    
  }
return null;
  
  
    
};