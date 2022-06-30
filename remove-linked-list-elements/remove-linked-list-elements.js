/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    
  if (head === null){
    return null; 
  }
  
  let dummy = new ListNode(0);
  dummy.next = head;
  
  let prev = dummy;
  let current = head;
  
  while (current!== null){
    if (current.val === val){
        prev.next = current.next;
    } else {
    prev = current;
    }
        current = current.next;
    

  }
  
  return dummy.next;
};