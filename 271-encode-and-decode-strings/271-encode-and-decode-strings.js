/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
    //['my', 'cat', 'is', 'fat'] - > 2%my3%cat2%is3%fat
  if (strs.length === 0) return '';
  
  let result = '';
  
  for (let i =0; i < strs.length; i++){
    let counter = strs[i].length;
    result+=counter + '%' + strs[i];
  }
  console.log(result);
  return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  if (s.length === 0) return '';
  
  let i = 0;
  let result = [];
  
  while (i <= s.length - 1){
    let divider = s.indexOf('%', i);
    let length = Number(s.substring(i, divider));
    i = divider + length + 1;
    result.push(s.substring(divider + 1, i));
  }
  return result;
    
};

