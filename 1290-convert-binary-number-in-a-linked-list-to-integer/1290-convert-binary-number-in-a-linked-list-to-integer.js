/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    
  if (head.length === 0){
    return 0;
  }
  
  let storage = ''
  while (head){
  storage+=head.val;
    head = head.next;    
  }
  
  return parseInt(storage, 2);
};