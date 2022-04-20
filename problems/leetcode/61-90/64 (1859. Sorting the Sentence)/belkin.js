/**
 * 63 ms, faster than 83.33%
 */
var sortSentence = function(s) {
  s = s.split(' ');
  s.sort((a, b) => parseInt(a[a.length - 1]) - parseInt(b[b.length - 1]));
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].substring(0, s[i].length - 1);
  }
  return s.join(' ');
};

let s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));
