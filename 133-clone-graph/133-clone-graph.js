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
  let visited = new Map();
  //initialize it with the first node
  visited.set(node, new Node (node.val))  
  
  //initialize queue with the first node
  let queue = [];
  queue.push(node);
  

  while (queue.length){
    
    let current = queue.shift();
    
    //checking all the iterable neighbors of the current node
    for (let neighbor of current.neighbors) {
      
 //if we didn't put the neighbor in the map
      
      if (!visited.has(neighbor)){
        
        //put it there copying the value
         visited.set(neighbor, new Node (neighbor.val));
        //add neighbor to the queue to continue bfs
         queue.push (neighbor);
      }
      
      
      //receive current node neigbors array
      let currentNeigh = visited.get(current).neighbors;
      
     
      //push there cloned neighbor
      currentNeigh.push(visited.get(neighbor));
    }
  }
  
  return visited.get(node);
  
};