/**
 * 86 ms, faster than 62.79%
 */
var spiralOrder = function(matrix) {
  let res = [];
  let paths = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  let pi = 0;
  let l = matrix.length * matrix[0].length;
  let c = [0, 0];
  for (let i = 0; i < l; i++) {
    res.push(matrix[c[0]][c[1]]);
    matrix[c[0]][c[1]] = undefined;
    if (
      matrix[c[0] + paths[pi][0]] === undefined
      || matrix[c[0] + paths[pi][0]][c[1] + paths[pi][1]] === undefined
    ) {
      pi++;
      if (pi > 3) {
        pi = 0;
      }
    }
    c[0] = c[0] + paths[pi][0];
    c[1] = c[1] + paths[pi][1];
  }
  return res;
};

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];
console.log(spiralOrder(matrix));
// [1,2,3,4,8,12,11,10,9,5,6,7]
