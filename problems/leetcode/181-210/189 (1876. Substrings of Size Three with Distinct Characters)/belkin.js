/**
 * 77 ms, faster than 83.63%
 */
var countGoodSubstrings = function(s) {
  let res = 0;
  for (let i = 0; i < s.length - 2; i++) {
    let sub = s.substr(i, 3).split('');
    let set = new Set(sub);
    if (sub.length === set.size) {
      res++;
    }
  }
  return res;
};

let s = "aababcabc";
console.log(countGoodSubstrings(s));
