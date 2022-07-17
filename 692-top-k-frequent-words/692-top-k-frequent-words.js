/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    //edge case
  if(words.length === 0){
    return [];
  }
  
  let obj = {};
  for(let i =0; i < words.length; i++){
    let word = words[i];
    if(obj[word] === undefined){
      obj[word] = 1;
    } else obj[word]++;    
  }
  
  let sorted = Object.keys(obj).sort(function(a, b)  {
    
  if (obj[b] > obj[a]) return 1;
   else if (obj[b] < obj[a]) return -1;
    else {
       //compare two words
      return a.localeCompare(b);
    }
  
  });
  console.log(sorted);
  return sorted.splice(0, k);
};