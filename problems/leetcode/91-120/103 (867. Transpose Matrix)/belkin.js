/**
 * 77 ms, faster than 89.06%
 */
var transpose = function(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let row = [];
    for (let i = 0; i < matrix.length; i++) {
      row.push(matrix[i][j])
    }
    result.push(row);
  }
  return result;
};

let matrix = [[1,2,3],[4,5,6],[7,8,9]];
console.log(transpose(matrix));
//[[1,4,7],[2,5,8],[3,6,9]]
