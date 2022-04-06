/**
 * 79 ms, faster than 57.21%
 */
var balancedStringSplit = function(s) {
  let balance = 0, res = 0;
  for (let i = 0; i < s.length; i++) {
    balance += s[i] === 'R' ? 1 : -1;
    if (balance === 0) {
      res++;
    }
  }
  return res;
};

let s = "LLLRLRRR";
console.log(balancedStringSplit(s));
