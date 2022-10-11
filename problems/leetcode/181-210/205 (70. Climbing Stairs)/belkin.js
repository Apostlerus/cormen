/**
 * 61 ms, faster than 94.34%
 */
var climbStairs = function(n) {
  let s = [1, 2, 3];
  for (let i = 3; i < n; i++) {
    s[i] = s[i - 1] + s[i - 2];
  }
  return s[n - 1];
};

let n = 5;
console.log(climbStairs(n));
