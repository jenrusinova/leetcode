/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode();
  
    dummy.next = head;
  
    let fast = dummy;
    let slow = dummy;
  
    //move fast pointer to the n nodes

  for (let i = 1; i <= n + 1; i++){
    fast = fast.next;
  }
  
  //move two pointers to the end
  while (fast !== null){
    fast = fast.next;
    slow = slow.next;
  }
 
  slow.next = slow.next.next;
  return dummy.next;
      
};