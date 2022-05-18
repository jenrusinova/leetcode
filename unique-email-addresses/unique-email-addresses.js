/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let result = new Set();
  
    for (let i =0; i < emails.length; i++){
      
      let elem = emails[i].split('@');
      
      
      let local = elem[0];
      local = local.split('+');
      let fullName = local[0].replaceAll('.', '') + '@' + elem[1];
      
      result.add(fullName)
    }
  return result.size;
};