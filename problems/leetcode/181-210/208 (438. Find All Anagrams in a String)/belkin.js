/**
 * 297 ms, faster than 31.68%
 */
var findAnagrams = function(s, p) {
  if (s.length < p.length) {
    return [];
  }
  let res = [];
  let tp = {};
  let sl = s.length;
  let pl = p.length;
  for (let i = 0; i < p.length; i++) {
    if (tp[p[i]] === undefined) {
      tp[p[i]] = 1;
    } else {
      tp[p[i]]++;
    }
  }
  for (let i = 0; i < p.length; i++) {
    if (tp[s[i]] !== undefined) {
      tp[s[i]]--;
    }
  }
  function check(table) {
    let values = Object.values(table);
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== 0) {
        return false;
      }
    }
    return true;
  }
  if (check(tp)) {
    res.push(0);
  }
  for (let i = 1; i <= sl - pl; i ++) {
    if (tp[s[i - 1]] !== undefined) {
      tp[s[i - 1]]++;
    }
    if (tp[s[i + pl - 1]] !== undefined) {
      tp[s[i + pl - 1]]--;
    }
    if (check(tp)) {
      res.push(i);
    }
  }
  return res;
};

let s = "cbaebabacd", p = "abc";
console.log(findAnagrams(s, p));
