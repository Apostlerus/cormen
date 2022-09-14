/**
 * 63 ms, faster than 96.89%
 */
var kWeakestRows = function(mat, k) {
  let v = [];
  for (let i = 0; i < mat.length; i++) {
    let j = 0;
    let sum = 0;
    while (mat[i][j] === 1) {
      sum++;
      j++;
    }
    v.push([i, sum]);
  }
  v.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(v[i][0]);
  }
  return res;
};

let mat =
    [[1,1,0,0,0],
      [1,1,1,1,0],
      [1,0,0,0,0],
      [1,1,0,0,0],
      [1,1,1,1,1]],
  k = 3;
console.log(kWeakestRows(mat, k));
