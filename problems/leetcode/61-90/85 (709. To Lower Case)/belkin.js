/**
 * 71 ms, faster than 63.09%
 */
var toLowerCase = function(s) {
  let res = '';
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 65 && charCode <= 90) {
      res = res + String.fromCharCode(charCode + 32);
    } else {
      res = res + s[i];
    }
  }
  return res;
};

let s = "Hello";
console.log(toLowerCase(s));
