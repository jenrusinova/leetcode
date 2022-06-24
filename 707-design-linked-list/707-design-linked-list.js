
function Node(val, next){
  this.val =  undefined ? 0 : val;
  this.next =  undefined ? next : val;
}

MyLinkedList = function() {   
    this.head = null;
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
 if (index < 0 || index >= this.getLength()) {
   return -1;
 }
    let current = this.head;
    for (let i = 0; i < index; i++) {
        current = current.next;
    }
    return current.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let node = new ListNode(val);
    node.next = this.head;
    this.head = node;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
     if (this.head == null) {
        this.addAtHead(val);
        return;
    }
    let node = new ListNode(val);
    let current = this.head;
    while (current.next !== null) {
        current = current.next;
    }
    current.next = node;
  
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    if (index === this.getLength()) {
        this.addAtTail(val);
        return;
    }
    if (index > this.getLength()) return;
        
    let current = this.head;
    let node = new ListNode(val);
    for (let i = 0; i < index-1; i++) {
        current = current.next;
    }
    let next = current.next;
    current.next = node;
    node.next = next;

  
};

MyLinkedList.prototype.getLength = function() {
  
  let length = 0;
  let current = this.head;
  while (current !== null){
    current = current.next;
    length++;
  }
  return length;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
       if (index < 0 || index >= this.getLength()) return;
    if (index == 0) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    for (let i = 0; i < index-1; i++) {
        current = current.next;
    }
    current.next = current.next.next;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */