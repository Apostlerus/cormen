/**
 * 127 ms, faster than 94.01%
 */
var groupAnagrams = function(strs) {
  let t = {};
  for (let i in strs) {
    let s = strs[i].split('');
    s.sort();
    s = s.join('');
    if (t[s] === undefined) {
      t[s] = [strs[i]];
    } else {
      t[s].push(strs[i]);
    }
  }
  return Object.values(t);
};
