/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (head === null){
      return false;
    }
  
    let storage = [];
  
  while (head !== null){
    storage.push(head.val);
    head = head.next;
  }
  
  console.log(storage);
  
  for (let i =0; i <= Math.floor(storage.length/2) - 1; i++){
        
     if (storage[i] !== storage[storage.length - i - 1]){
         return false;
    }
  }
   return true;
  
};