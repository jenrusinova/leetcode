/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head  === null) return null;
  
   let previous = null
   let current = head;
  
    while (current){
      //save the next pointer
      let next = current.next;
      
       current.next = previous;
       previous = current;
      current = next;
    }
  
  return previous;
  
};