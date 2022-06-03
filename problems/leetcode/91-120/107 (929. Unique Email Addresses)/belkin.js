/**
 * 83 ms, faster than 83.57%
 */
var numUniqueEmails = function(emails) {
  let set = new Set();
  emails.map(email => {
    email = email.split('@');
    email[0] = email[0].split('+')[0];
    email[0] = email[0].replace(/\./g, '');
    set.add(`${email[0]}@${email[1]}`);
  });
  return set.size;
};

let emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];
console.log(numUniqueEmails(emails));
