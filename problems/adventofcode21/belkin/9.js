function riskLevelSum(field) {
  field.push([...Array(field[0].length).fill(10)]);
  field.unshift([...Array(field[0].length).fill(10)]);
  let count = 0;
  for (let i = 1; i < field.length - 1; i++) {
    for (let j = 1; j < field[0].length - 1; j++) {
      if (field[i][j] < field[i - 1][j] && field[i][j] < field[i + 1][j]
        && field[i][j] < field[i][j - 1] && field[i][j] < field[i][j + 1]
      ) {
        count += field[i][j] + 1;
      }
    }
  }
  return count;
}

const fs = require('fs');
const allFileContents = fs.readFileSync('9.input', 'utf-8');
let field = [];
allFileContents.split(/\r?\n/).map(line => {
  let dLine = line.split('').map(d => parseInt(d, 10));
  dLine.push(10);
  dLine.unshift(10);
  field.push(dLine);
});

console.log(riskLevelSum(field));
