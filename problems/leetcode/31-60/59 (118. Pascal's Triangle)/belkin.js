/**
 * 63 ms, faster than 82.54%
 * Утренняя разминка :)
 */
var generate = function(numRows) {
  let res = [[1]];
  for (let i = 2; i <= numRows; i++) {
    let row = [1];
    for (let j = 1; j < res[res.length - 1].length; j++) {
      row.push(res[res.length - 1][j] + res[res.length - 1][j - 1]);
    }
    row.push(1);
    res.push(row);
  }
  return res;
};

let numRows = 5;
console.log(generate(numRows));
//[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
