const fs = require('fs');
let res = 0;
const allFileContents = fs.readFileSync('4.input', 'utf-8');
const table = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  let letters = line.split('');
  table.push(letters);
});

const ort = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1],
];

let word;

for (let i = 0; i < table.length; i += 1) {
  for (let j = 0; j < table[i].length; j += 1) {
    if (table[i][j] !== 'X') {
      continue;
    }
    for (let k = 0; k < ort.length; k += 1) {
      word = 'X';
      for (let l = 1; l <= 3; l += 1) {
        let letter;
        if (
          table[i + (ort[k][0] * l)] !== undefined
            && table[i + (ort[k][0] * l)][j + (ort[k][1] * l)] !== undefined
        ) {
          letter = table[i + (ort[k][0] * l)][j + (ort[k][1] * l)];
        } else {
          letter = 'O';
        }
        word += letter;
      }
      if (word === 'XMAS') {
        res += 1;
      }
    }
  }
}

console.log(res);

let res2 = 0;

for (let i = 1; i < table.length - 1; i += 1) {
  for (let j = 1; j < table[i].length - 1; j += 1) {
    if (table[i][j] !== 'A') {
      continue;
    }
    let word1 = 'A';
    let letter1 = table[i - 1][j - 1];
    let letter2 = table[i + 1][j + 1];
    word1 = letter1 + word1 + letter2;
    let word2 = 'A';
    let letter3 = table[i + 1][j - 1];
    let letter4 = table[i - 1][j + 1];
    word2 = letter3 + word2 + letter4;
    console.log(word1);
    console.log(word2);
    if ((word1 === 'MAS' || word1 === 'SAM') && (word2 === 'MAS' || word2 === 'SAM')) {
      res2 += 1;
    }
  }
}

console.log(res2);
