/**
 * 115 ms, faster than 86.95%
 */
var firstUniqChar = function(s) {
  let table = {};
  let res = -1;
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] === undefined) {
      table[s[i]] = 1;
    } else {
      table[s[i]]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] === 1) {
      res = i;
      break;
    }
  }
  return res;
};

let s = "aabb";
console.log(firstUniqChar(s));
