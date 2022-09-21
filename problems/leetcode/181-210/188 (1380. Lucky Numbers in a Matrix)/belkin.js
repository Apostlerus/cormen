/**
 * 83 ms, faster than 73.53%
 */
var luckyNumbers  = function(matrix) {
  let mins = [], maxes = [];
  for (let i = 0; i < matrix.length; i++) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
      }
    }
    mins.push(min);
  }
  for (let j = 0; j < matrix[0].length; j++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][j] > max) {
        max = matrix[i][j];
      }
    }
    maxes.push(max);
  }
  return mins.filter(num => {
    return maxes.includes(num);
  });
};

let matrix = [[3,7,8],[9,11,13],[15,16,17]];
console.log(luckyNumbers(matrix));
