/**
 * 68 ms, faster than 89.02%
 */
var uniquePaths = function(m, n) {
  if (m === 1 || n === 1) {
    return 1;
  }
  let a = Array(m).fill(1);
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      a[j] = a[j] + a[j - 1];
    }
  }
  return a[m - 1];
};

let m = 3, n = 7;
console.log(uniquePaths(m, n));
