/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
    
  
  if (node === null) {
    return null;
  }
  
 
  //create new hashmap
  let cloned = new Map();
  
    
  //initialize it with the first node
  cloned.set(node, new Node (node.val))  
  
     
  //initialize queue with the first node
  let queue = [];
  queue.push(node);

  while (queue.length){
    
    let original = queue.shift();
    
    //checking all the iterable neighbors of the current node
    for (let neighbor of original.neighbors) {
      
 //if we didn't put the neighbor in the map
      
      if (!cloned.has(neighbor)){
        
        //put it there copying the value
        
         cloned.set(neighbor, new Node (neighbor.val));
        
        //add neighbor to the queue to continue bfs
         queue.push (neighbor);
      }
           
      //receive copy of current node neighbors
      let currentNeigh = cloned.get(original).neighbors;
           
      //push there cloned neighbor
      currentNeigh.push(cloned.get(neighbor));
    }
  }
  
  return cloned.get(node);
  
};