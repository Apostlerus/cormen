/**
 * 74 ms, faster than 81.46%
 */
var restoreString = function(s, indices) {
  let res = new Array(s.length);
  for (let i = 0; i < s.length; i++) {
    res[indices[i]] = s[i];
  }
  return res.join('');
};

let s = "codeleet", indices = [4,5,6,7,0,2,1,3];
console.log(restoreString(s, indices));
