/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let firstSorted = s.split('').sort().join();
  let secondSorted = t.split('').sort().join();

    if(firstSorted=== secondSorted) return true;
    else return false;
  
};