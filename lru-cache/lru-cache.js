/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.map = new Map();
    this.cap = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) {
      return -1;
    }
      //delete key and value and add again
      let value = this.map.get(key);
      this.map.delete(key);
      this.map.set(key, value)
  
      return value;
          
};


LRUCache.prototype.put = function(key, value) {
  
  this.map.delete(key);  
  this.map.set(key, value);
  
  if(this.map.size > this.cap){
    //delete lru
    let lru = this.map.keys().next().value;
    this.map.delete(lru);
  }
};

