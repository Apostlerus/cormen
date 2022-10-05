/**
 * 109 ms, faster than 47.05%
 */
var longestPalindrome = function(s) {
  let t = {};
  let sl = s.length;
  for (let i = 0; i < sl; i++) {
    if (t[s[i]] === undefined) {
      t[s[i]] = 1;
    } else {
      t[s[i]]++;
    }
  }
  t = Object.values(t);
  let tl = t.length;
  let sum = 0;
  let odd = false;
  for (let i = 0; i < tl; i++) {
    if (t[i] % 2 === 0) {
      sum += t[i];
    } else {
      odd = true;
      if (t[i] >= 3) {
        sum += t[i] - 1;
      }
    }
  }
  if (odd) {
    sum++;
  }
  return sum;
};

let s = "abccccdd";
console.log(longestPalindrome(s));
