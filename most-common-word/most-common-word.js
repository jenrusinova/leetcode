/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
  
  let words = paragraph.toLowerCase().replaceAll(".", "").replace(/[^a-z]/gi,' ').split(/[ ,]+/);
  console.log(words);
  
  let obj = {};
  
  for (let i =0; i < words.length; i++){
    let word = words[i];
    if (obj[word] === undefined){
      obj[word] = 1;
    } else {
      obj[word]++;
    }
  }
  
  for (let i =0; i < banned.length; i++){
    let bannedWord = banned[i];
    delete obj[bannedWord];
  }
  
  let answers = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    return answers[0][0];
};