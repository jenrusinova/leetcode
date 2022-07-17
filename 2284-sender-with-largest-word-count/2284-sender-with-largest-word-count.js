/**
 * @param {string[]} messages
 * @param {string[]} senders
 * @return {string}
 */
var largestWordCount = function(messages, senders) {
    //edge case
  if(messages.length === 0){
    return null;
  }
  //O(n)
  let countWords = function countWords(str){
    let arr = str.split(' ');
    return arr.length;
   }
  
  
  let obj = {};
  
  //O(n)
  for (let i =0; i < senders.length; i++){
    let sender = senders[i];
    
      if (obj[sender] !== undefined){
        let result = obj[sender];
        obj[sender] = Number(result) + Number(countWords(messages[i]));
    
      } else {
        obj[sender] = countWords(messages[i]);
      }
    
      }
 //O (n log(n))  
  	let answer =  Object.entries(obj).sort((a, b) => 
            b[1] - a[1] !== 0 ? 
            b[1] - a[1] : 
           (a[0] > b[0] ? -1 : 1))[0][0];
      

  return answer;
};
