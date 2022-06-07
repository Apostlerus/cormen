/**
 * 77 ms, faster than 56.15%
 */
var freqAlphabets = function(s) {
  let result = '';
  for (let i = s.length - 1; i >= 0;) {
    let num;
    if (s[i] === '#') {
      num = parseInt(s.slice(i - 2, i), 10);
      i -= 3;
    } else {
      num = parseInt(s.slice(i, i + 1), 10);
      i--;
    }
    result = String.fromCharCode(num + 96) + result;
  }
  return result;
};

let s = "10#11#12";
console.log(freqAlphabets(s));
// "jkab"
