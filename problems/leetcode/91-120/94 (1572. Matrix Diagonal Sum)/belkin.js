/**
 * 68 ms, faster than 80.59%
 */
var diagonalSum = function(mat) {
  let sum = 0;
  let hasMid = mat.length % 2 > 0;
  let mid = Math.floor(mat.length / 2);
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i];
    if (!(hasMid && i === mid)) {
      sum += mat[mat.length - 1 - i][i];
    }
  }
  return sum;
};

let mat = [
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
  [1,1,1,1],
];
console.log(diagonalSum(mat));
//8
