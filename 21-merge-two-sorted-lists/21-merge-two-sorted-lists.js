/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  let headNode = {val: -1, next: null};
    
    let currentNode = headNode;
  
  while(list1 && list2){

    if(list2.val <= list1.val){
       
      currentNode.next = list2;
      list2 = list2.next;
    } else {
     

      currentNode.next = list1;
      list1 = list1.next;
    }
    currentNode = currentNode.next;
  }
             
 if (list1){
  currentNode.next = list1;
 } else if (list2){
  currentNode.next = list2;
 }
   return headNode.next;  
};