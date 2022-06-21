/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    //edge case
    if (head.length === 0){
    return null;
  }
  
  let middle = findMiddle(head);
  let reversed = reverseList(middle);

  merge(head, reversed);

 function merge (list1, list2){
   while (list2.next){
     let temp = list1.next;
     list1.next = list2;
     list1 = temp;
     
     temp = list2.next;
     list2.next = list1;
     list2 = temp;
   }
 }
  
   function findMiddle(list){
    let slow = list;
    let fast = list;
    
    while (fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
      return slow;
  }
  
  function reverseList(list){
     let prev = null;
     let current = list;
    
    while (current !== null){
       //write the next
      let next = current.next;
      
      //reverse direction
      current.next = prev;
      
      //move pointers to the right
      prev = current;
      current = next;
            
    }
    
    return prev;
  }
    
  
}
  