/**
 * 248 ms, faster than 90.61%
 */
var longestPalindrome = function(words) {
  let t = {};
  let rt = {};
  let st = {};
  for (let i = 0; i < words.length; i++) {
    if (words[i][0] === words[i][1]) {
      st[words[i]] = st[words[i]] + 1 || 1;
      continue;
    }
    t[words[i]] = t[words[i]] + 1 || 1;
    let rev = `${words[i][1]}${words[i][0]}`;
    rt[rev] = rt[rev] + 1 || 1;
  }
  let count = 0;
  let doubles = Object.values(st);
  doubles.sort((a, b) => b - a);
  let mid = false;
  for (let i = 0; i < doubles.length; i++) {
    let n = doubles[i];
    if (n % 2 === 0) {
      count += 2 * n;
      continue;
    }
    if (!mid) {
      count += 2 * n;
      mid = true;
      continue;
    }
    count += (n - 1) * 2;
  }
  words = Object.keys(t);
  for (let i = 0; i < words.length; i++) {
    if (rt[words[i]] === undefined) {
      continue;
    }
    count += Math.min(t[words[i]], rt[words[i]]) * 2;
  }
  return count;
};

let words = ["ab","ty","yt","lc","cl","ab", 'ff', 'gg', 'gg'];
console.log(longestPalindrome(words));
