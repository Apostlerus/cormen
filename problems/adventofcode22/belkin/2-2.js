const fs = require('fs');
const allFileContents = fs.readFileSync('2.input', 'utf-8');

let scores = {
  X: {
    A: 3, B: 1, C: 2,
  },
  Y: {
    A: 1, B: 2, C: 3,
  },
  Z: {
    A: 2, B: 3, C: 1,
  },
};

let cScores = {
  X: 0, Y: 3, Z: 6,
}
let sum = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
  let round = line.split(' ');
  sum += scores[round[1]][round[0]];
  sum += cScores[round[1]];
});

console.log(sum);
