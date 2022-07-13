function crabFuel(positions) {
  let sum = 0;
  for (let i = 0; i < positions.length; i++) {
    sum += positions[i];
  }
  let mid = Math.floor(sum / positions.length);
  let minFuel = 100000000;
  for (let pos = 0; pos <= mid; pos++) {
    let fuel = 0;
    for (let i = 0; i < positions.length; i++) {
      fuel += Math.abs(pos - positions[i]);
    }
    if (fuel < minFuel) {
      minFuel = fuel;
    }
  }
  return minFuel;
}

function crabEngineering(positions) {
  positions.sort((a, b) => b - a);
  let minFuel = 100000000;
  for (let pos = 0; pos <= positions[0]; pos++) {
    let fuel = 0;
    for (let i = 0; i < positions.length; i++) {
      let distance = Math.abs(pos - positions[i]);
      fuel += distance * (distance + 1) / 2;
    }
    if (fuel < minFuel) {
      minFuel = fuel;
    }
  }
  return minFuel;
}

const fs = require('fs');
const allFileContents = fs.readFileSync('7.input', 'utf-8');
let positions;
allFileContents.split(/\r?\n/).forEach(line =>  {
  positions = line.split(',').map(a => parseInt(a, 10));
});

// console.log(crabFuel(positions));
console.log(crabEngineering(positions));
