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
  
  let countWords = function countWords(str){
    let arr = str.split(' ');
    //console.log('counted', arr.length);
    return arr.length;
    
  }
  
  let obj = {};
  
  for (let i =0; i < senders.length; i++){
    let sender = senders[i];
      //console.log('obj', obj);
      if (obj[sender] !== undefined){
        let result = obj[sender];
        console.log('new sender', sender);
        console.log('result', result);
        obj[sender] = Number(result) + Number(countWords(messages[i]));
        // obj[sender]= countWords(messages[i]);
      } else {
          console.log('sender', sender);
        console.log('count', countWords(messages[i]));
        obj[sender] = countWords(messages[i]);
      }
    
    
  }
  console.log(obj);
  //obj = {Alice : 5, userTwo: 2, userThree: 3}
  	let answer =  Object.entries(obj).sort((a, b) => 
            b[1] - a[1] !== 0 ? 
            b[1] - a[1] : 
           (a[0] > b[0] ? -1 : 1))[0][0];

      
      
    //   if (obj[b] > obj[a]) return 1;
    // else if (obj[b] < obj[a]) return -1;
    // else {
    //   return b.localeCompare(a);
    // }
    

  //console.log(answer[0]);
  return answer;
};
 // return sorted = Object.keys(obj).sort((a, b) => 
 //            b[1] - a[1] !== 0 ? 
 //            b[1] - a[1] : 
 //           (a[0] > b[0] ? -1 : 1))[0][0];
  
  //sort(function(a, b){
     
   // if (obj[b] > obj[a]) return 1;
   //  else if (obj[b] < obj[a]) return -1;
   //  else {
   //    return b.localeCompare(a);
   //  }
  //})
  // console.log('sorted', sorted);
  // return sorted[0];
//};