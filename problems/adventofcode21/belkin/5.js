function dangerPointsCount(coords) {
  let arr = [];
  for (let m = 0; m < 1000; m++) {
    arr.push([]);
    for (let n = 0; n < 1000; n++) {
      arr[m].push(0);
    }
  }
  for (let c = 0; c < coords.length; c++) {
    if (coords[c][0] !== coords[c][2] && coords[c][1] !== coords[c][3]) {
      continue;
    }
    if (coords[c][0] === coords[c][2]) {
      let a = coords[c][1], b = coords[c][3];
      let x = coords[c][0];
      if (a > b) {
        [a, b] = [b, a];
      }
      for (let i = a; i <= b; i++) {
        arr[i][x] += 1;
      }
    } else {
      let a = coords[c][0], b = coords[c][2];
      let y = coords[c][1];
      if (a > b) {
        [a, b] = [b, a];
      }
      for (let i = a; i <= b; i++) {
        arr[y][i] += 1;
      }
    }
  }
  let res = 0;
  for (let i = 0; i < 1000; i++) {
    for (let j = 0; j < 1000; j++) {
      if (arr[i][j] > 1) {
        res++;
      }
    }
  }
  return res;
}

const fs = require('fs');
const allFileContents = fs.readFileSync('5.input', 'utf-8');
let coords = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  let coord = line.replace(' -> ', ',').split(',').map(a => parseInt(a, 10));
  coords.push(coord);
});

console.log(dangerPointsCount(coords));
