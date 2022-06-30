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
var oddEvenList = function(head) {

  if (head === null) {
    return null;
  }
  
  let storage = [];
  while (head !== null) {
    storage.push(head.val);
    head = head.next;
  }
  
  let odd = [];
  let even = [];
  
  for (let i =0; i < storage.length; i++) {
    if (i % 2 !== 1) {
      odd.push(storage[i]);
    } else {
      even.push(storage[i]);
    }
  }

  
  let arr = odd.concat(even);
  
  let dummy = new ListNode(-1);
let dummyHead = dummy;

for(let i = 0; i < arr.length; i++){
  dummyHead.next = new ListNode(arr[i]);
  dummyHead = dummyHead.next;
}
  
 return dummy.next;

  
};