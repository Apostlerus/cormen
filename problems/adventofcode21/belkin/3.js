function calculatePowerConsumption(bits) {
  let bitLength = bits[0].length, sums = new Array(bitLength).fill(0),
    gamma = [], epsilon = [];
  for (let i = 0; i < bits.length; i++) {
    for (let j = 0; j < bitLength; j++) {
      sums[j] += parseInt(bits[i][j]);
    }
  }
  for (let i = 0; i < bitLength; i++) {
    if (sums[i] >= bits.length / 2) {
      gamma.push(1);
      epsilon.push(0);
    } else {
      gamma.push(0);
      epsilon.push(1);
    }
  }
  return parseInt(gamma.join(''), 2) * parseInt(epsilon.join(''), 2);
}

function calculateLifeSupportRating(bits) {
  let bitLength = bits[0].length,
    oxygenBits = [...bits], co2Bits = [...bits], oxygen, co2;
  for (let i = 0; i < bitLength; i++) {
    let most = 0, least = 0, mostCommon, leastCommon;
    for (let j = 0; j < oxygenBits.length; j++) {
      most += parseInt(oxygenBits[j][i]);
    }
    most = most >= (oxygenBits.length / 2) ? 1 : 0;
    oxygenBits = oxygenBits.filter(bit => parseInt(bit[i]) === most);
    for (let j = 0; j < co2Bits.length; j++) {
      least += parseInt(co2Bits[j][i]);
    }
    least = least < (co2Bits.length / 2) ? 1 : 0;
    if (co2Bits.length > 1) {
      co2Bits = co2Bits.filter(bit2 => parseInt(bit2[i]) === least);
    }
  }
  return parseInt(oxygenBits[0], 2) * parseInt(co2Bits[0], 2);
}

const fs = require('fs');
let bits = [];
const allFileContents = fs.readFileSync('3.input', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  bits.push(line);
});

// console.log(calculatePowerConsumption(bits));
console.log(calculateLifeSupportRating(bits));
