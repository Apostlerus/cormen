/**
 * 85 ms, faster than 76.81%
 */
var isPalindrome = function(s) {
  s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();
  let s2 = s.split('').reverse().join('');
  return s === s2;
};

let s = "9A man, a plan, a canal: Panama9";
console.log(isPalindrome(s));
