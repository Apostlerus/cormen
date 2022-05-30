/**
 * 72 ms, faster than 95.27%
 */
var reverseWords = function(s) {
  s = s.split(' ');
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split('').reverse().join('');
  }
  s = s.join(' ');
  return s;
};

let s = "Let's take LeetCode contest";
console.log(reverseWords(s));
