/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    //edge case
  if (s.length === 0) return -1;
  if (s.length === 1) return 0;
  
  let obj = {};
  let chars = [];
  
  for (let i =0; i < s.length; i++){
    let char = s[i];
    if (obj[char] === undefined && chars.indexOf(char) === -1){
      obj[char] = i;
          chars.push(char);

    } else {
      console.log('found duplicate');
      delete obj[char];
    }
  }
  console.log('char arr', chars);
console.log('obj', obj);
  
  
  
  let entries = Object.entries(obj);
  if (entries.length === 0) return -1;
  entries.sort((a, b)=> a[1] - b[1]);
  console.log('entries', entries);
  console.log(entries[0][1]);
  return entries[0][1];
  
  
};