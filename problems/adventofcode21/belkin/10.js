function illegalCount(lines) {
  let count = 0;
  const points = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137,
  };
  const lefts = ['(', '[', '{', '<'];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  lines.map(line => {
    line = line.split('');
    for (let i = 1; i < line.length; i++) {
      if (i < 1) {
        i = 1;
      }
      if (lefts.includes(line[i])) {
        continue;
      }
      if (line[i - 1] !== pairs[line[i]]) {
        count += points[line[i]]
        break;
      }
      line.splice(i - 1, 2);
      i -= 2;
    }
  });
  return count;
}

function middleCompletion(lines) {
  let counts = [];
  const points = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4,
  };
  const lefts = ['(', '[', '{', '<'];
  const pairs = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  const bPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  let valid = [];
  lines.map(line => {
    line = line.split('');
    let bad = false;
    for (let i = 1; i < line.length; i++) {
      if (i < 1) {
        i = 1;
      }
      if (lefts.includes(line[i])) {
        continue;
      }
      if (line[i - 1] !== pairs[line[i]]) {
        bad = true;
        break;
      }
      line.splice(i - 1, 2);
      i -= 2;
    }
    if (!bad) {
      valid.push(line);
    }
  });
  valid.map(openLine => {
    let count = 0;
    for (let i = openLine.length - 1; i >= 0; i--) {
      count = (count * 5) + points[bPairs[openLine[i]]];
    }
    counts.push(count);
  });
  counts.sort((a, b) => a - b);
  return counts[Math.floor(counts.length / 2)];
}

const fs = require('fs');
const allFileContents = fs.readFileSync('10.input', 'utf-8');
let lines = [];
allFileContents.split(/\r?\n/).map(line => {
  lines.push(line);
});

// console.log(illegalCount(lines));
console.log(middleCompletion(lines));
