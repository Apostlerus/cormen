const fs = require('fs');
const allFileContents = fs.readFileSync('8.input', 'utf-8');
let forest = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  forest.push(line.split(''));
});

function treetopTreeHouse(forest) {
  let res = (forest.length * 2) + ((forest[0].length - 2) * 2);
  for (let i = 1; i < forest.length - 1; i++) {
    for (let j = 1; j < forest[0].length - 1; j++) {
      let v = true;
      for (let k = 0; k < j; k++) {
        if (forest[i][k] >= forest[i][j]) {
          v = false;
          break;
        }
      }
      if (v) {
        res++;
        continue;
      }
      v = true;
      for (let k = j + 1; k < forest[i].length; k++) {
        if (forest[i][k] >= forest[i][j]) {
          v = false;
          break;
        }
      }
      if (v) {
        res++;
        continue;
      }
      v = true;
      for (let k = 0; k < i; k++) {
        if (forest[k][j] >= forest[i][j]) {
          v = false;
          break;
        }
      }
      if (v) {
        res++;
        continue;
      }
      v = true;
      for (let k = i + 1; k < forest.length; k++) {
        if (forest[k][j] >= forest[i][j]) {
          v = false;
          break;
        }
      }
      if (v) {
        res++;
      }
    }
  }
  return res;
}

function treetopTreeHouseScore(forest) {
  let res = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i < forest.length - 1; i++) {
    for (let j = 1; j < forest[0].length - 1; j++) {
      let c = [0, 0, 0, 0];
      for (let k = j - 1; k >= 0; k--) {
        c[0]++;
        if (forest[i][k] >= forest[i][j]) {
          break
        }
      }
      for (let k = j + 1; k < forest[i].length; k++) {
        c[1]++;
        if (forest[i][k] >= forest[i][j]) {
          break;
        }
      }
      for (let k = i - 1; k >= 0; k--) {
        c[2]++;
        if (forest[k][j] >= forest[i][j]) {
          break;
        }
      }
      for (let k = i + 1; k < forest.length; k++) {
        c[3]++;
        if (forest[k][j] >= forest[i][j]) {
          break;
        }
      }
      c = c[0] * c[1] * c[2] * c[3];
      if (c > res) {
        res = c;
      }
    }
  }
  return res;
}

console.log(treetopTreeHouse(forest));
console.log(treetopTreeHouseScore(forest));
