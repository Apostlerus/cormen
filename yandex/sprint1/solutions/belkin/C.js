/**
 * Тупо, конечно
 */
function matrixNeighbours(matrix, y, x) {
  let res = [];
  if (matrix[y - 1] !== undefined) {
    res.push(matrix[y - 1][x]);
  }
  if (matrix[y + 1] !== undefined) {
    res.push(matrix[y + 1][x]);
  }
  if (matrix[y][x - 1] !== undefined) {
    res.push(matrix[y][x - 1]);
  }
  if (matrix[y][x + 1] !== undefined) {
    res.push(matrix[y][x + 1]);
  }
  return res.sort((a, b) => a - b).join(' ');
}

const reader = require('readline').createInterface({
  input: process.stdin
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  const matrix = [];
  for (let i = 2; i < inputLines.length - 2; i++) {
    matrix.push(inputLines[i].split(' ').map(num => parseInt(num)));
  }
  const [y, x] = [
    parseInt(inputLines[inputLines.length - 2]),
    parseInt(inputLines[inputLines.length - 1])
  ];
  let res = matrixNeighbours(matrix, y, x);
  process.stdout.write(res + '');
  process.exit();
});
