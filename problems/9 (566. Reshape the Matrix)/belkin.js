/**
 * 88 ms, faster than 84.68%
 * В лоб, не быстрейший способ. Видимо, можно не перебирать все элементы,
 * а лучше как-то резать на подмассивы.
 */
var matrixReshape = function(mat, r, c) {
  if (r * c !== mat.length * mat[0].length) {
    return mat;
  }
  let x = 0, res = [[]];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (x === c) {
        x = 0;
        res.push([]);
      }
      let b = mat[i][j];
      res[res.length - 1].push(b);
      x += 1;
    }
  }
  return res;
};

let mat = [[1,2],[3,4]], r = 4, c = 1;
console.log(matrixReshape(mat, r, c));
