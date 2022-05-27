/**
 * 67 ms, faster than 80.31%
 */
var truncateSentence = function(s, k) {
  s = s.split(' ');
  s.splice(k);
  return s.join(' ');
};

let s = "Hello how are you Contestant", k = 4;
console.log(truncateSentence(s, k));
