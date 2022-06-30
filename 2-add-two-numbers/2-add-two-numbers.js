/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if (l1 === null) {
      return l2;
    }
  
    if (l2 === null){
      return l1;
    }
  
  let  s1 = '';
  let s2 = '';

  let head1 = l1;
  let head2 = l2;
  console.log(head1, head2);
  while (head1){
    s1 += head1.val;
   head1 = head1.next;
  }
  while (head2){
    s2 += head2.val;
   head2 = head2.next;
  }
  
  s1 = s1.split("").reverse().join("");
  s2 = s2.split("").reverse().join("");

    console.log(s1, s2);
  let sum = BigInt(s1)+BigInt(s2);
  sum = sum.toString();
  
  let dummy = new ListNode(-1);
let dummyHead = dummy;
  
for(let i = sum.length; i >=0; i--){
  console.log(sum[i]);
  dummyHead.next = new ListNode(sum[i]);
  dummyHead = dummyHead.next;
}
  
 return dummy.next.next;
};