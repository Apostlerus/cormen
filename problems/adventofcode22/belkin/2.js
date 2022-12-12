const fs = require('fs');
const allFileContents = fs.readFileSync('2.input', 'utf-8');

let scores = {
  X: {
    A: 3, B: 0, C: 6,
  },
  Y: {
    A: 6, B: 3, C: 0,
  },
  Z: {
    A: 0, B: 6, C: 3,
  },
};

let cScores = {
  X: 1, Y: 2, Z: 3,
}
let sum = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
  let round = line.split(' ');
  sum += scores[round[1]][round[0]];
  sum += cScores[round[1]];
});

console.log(sum);
