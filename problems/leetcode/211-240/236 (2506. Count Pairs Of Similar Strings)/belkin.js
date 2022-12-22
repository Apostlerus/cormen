/**
 * 105 ms Beats 92.58%
 */
var similarPairs = function(words) {
  let t = {};
  words.forEach(word => {
    let s = [...new Set(word.split(''))];
    s.sort();
    t[s] = t[s] + 1 || 1;
  });
  let c = Object.values(t);
  let res = 0;
  for (let i = 0; i < c.length; i++) {
    if (c[i] > 1) {
      res += (c[i] * (c[i] - 1)) / 2;
    }
  }
  return res;
};

let words = ["aba","aabb","abcd","bac","aabc"];

console.log(similarPairs(words));
