/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
  if (strs.length === 0){
     return [['']]    
  }
    
  let answers = {};
  
  for (let i =0; i < strs.length; i++){
    let word = strs[i];

    let sortedWord = word.split('').sort().join('');
    if (answers[sortedWord] !== undefined){
      answers[sortedWord].push(word)
    } else {
      answers[sortedWord] = [word]
    }
  
    
  }
  return Object.values(answers);
};