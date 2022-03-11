function calculateIncreases(depths) {
  let res = 0;
  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i - 1]) {
      res++;
    }
  }
  return res;
}

function calculateThreeSumIncreases(depths) {
  let res = 0;
  let prev = depths[0] + depths[1] + depths[2];
  for (let i = 1; i < depths.length - 2; i++) {
    let current = depths[i] + depths[i + 1] + depths[i + 2];
    if (current > prev) {
      res++;
    }
    prev = current;
  }
  return res;
}

const fs = require('fs');
let depths = [];
const allFileContents = fs.readFileSync('1.input', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  depths.push(parseInt(line));
});

// console.log(calculateIncreases(depths));
console.log(calculateThreeSumIncreases(depths));
