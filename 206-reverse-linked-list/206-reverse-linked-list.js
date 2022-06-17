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
  
  //create 2 pointers
    let prev = null;
    let curr = head;
  
  
  while(curr){
  //save the next pointer    
    let next = curr.next;
    
    //reverse the direvction    
    curr.next = prev;
    
    //move 2 pointers to the right
    prev = curr;
    curr = next;
    
}
  
  return prev;
  
  
    
  
};