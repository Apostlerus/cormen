/**
 * 111 ms, faster than 61.35%
 */
var isIsomorphic = function(s, t) {
  s = s.split('');
  t = t.split('');
  let st = {}, tt = {};
  for (let i = 0; i < s.length; i++) {
    if (st[s[i]] === undefined) {
      st[s[i]] = i;
    }
    if (tt[t[i]] === undefined) {
      tt[t[i]] = i;
    }
    s[i] = st[s[i]];
    t[i] = tt[t[i]];
  }
  return s.join('-') === t.join('-');
};

let s = "paprr", t = "title";
console.log(isIsomorphic(s, t));
