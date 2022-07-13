function sevenDigits(lines) {
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split(' | ')[1].split(' ');
    for (let j = 0; j < lines[i].length; j++) {
      if ([2, 3, 4, 7].includes(lines[i][j].length)) {
        count++;
      }
    }
  }
  return count;
}

/**
 * Не понял задачу (часть 2), реализовал что-то не то, не работает.
 * Так и не могу понять принцип входных данных
 */
function sevenDigitsDecode(lines) {
  let sum = 0;
  let valid = {
    'abcefg': 0,
    'cf': 1,
    'acdeg': 2,
    'acdfg': 3,
    'bcdf': 4,
    'abdfg': 5,
    'abdefg': 6,
    'acf': 7,
    'abcdefg': 8,
    'abcdfg': 9,
  };
  for (let i = 0; i < lines.length; i++) {
    let dCodes = lines[i].split(' | ')[0].split(' ');
    let output = lines[i].split(' | ')[1].split(' ');
    let match = {};
    for (let w = 0; w < dCodes.length; w++) {
      if (dCodes[w].length === 7) {
        match[dCodes[w][0]] = 'a';
        match[dCodes[w][1]] = 'b';
        match[dCodes[w][2]] = 'c';
        match[dCodes[w][3]] = 'd';
        match[dCodes[w][4]] = 'e';
        match[dCodes[w][5]] = 'f';
        match[dCodes[w][6]] = 'g';
      }
    }
    let digits = [];
    for (let o = 0; o < output.length; o++) {
      let letters = output[o].split('');
      console.log(letters);
      for (let l = 0; l < letters.length; l++) {
        letters[o] = match[digits[o]];
      }
      letters = letters.join('');
      digits.push(valid[letters]);
    }
    digits = parseInt(digits.join(''), 10);
    sum += digits;
  }
  return sum;
}

const fs = require('fs');
const allFileContents = fs.readFileSync('8.input', 'utf-8');
let lines = allFileContents.split(/\r?\n/);

// console.log(sevenDigits(lines));
console.log(sevenDigitsDecode(lines));
