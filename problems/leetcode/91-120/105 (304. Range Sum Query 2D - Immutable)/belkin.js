/**
 * 1737 ms, faster than 24.18%
 * Это при использовании кэша sums. А без него:
 * 3682 ms, faster than 19.27%
 *
 * Но всё равное это прямолинейное решение.
 * Наверняка можно и расчет ускорить.
 */
var NumMatrix = function(matrix) {
  this.matrix = matrix;
  this.sums = {};
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  let sum = 0;
  const key = `k${row1}-${col1}-${row2}-${col2}`;
  if (this.sums[key] !== undefined) {
    return this.sums[key];
  }
  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }
  this.sums[key] = sum;
  return sum;
};

let numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]
]);
console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)
