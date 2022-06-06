/**
 * 58 ms, faster than 93.91%
 */
var replaceDigits = function(s) {
  s = s.split('');
  for (let i = 1; i < s.length; i += 2) {
    s[i] = String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i], 10));
  }
  return s.join('');
};

let s = "a1b2c3d4e";
console.log(replaceDigits(s));
// "abbdcfdhe"
