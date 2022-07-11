function bingoScore(boards, steps) {
  let scores = [];
  let multi = 0;
  for (let s = 0; s < steps.length; s++) {
    for (let b = 0; b < boards.length; b++) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (boards[b][i][j] === steps[s]) {
            boards[b][i][j] = -1;
          }
        }
      }
      let won = false;
      for (let i = 0; i < 5; i++) {
        let sum = 0;
        for (let j = 0; j < 5; j++) {
          sum += boards[b][i][j];
        }
        if (sum === -5) {
          won = true;
          break;
        }
      }
      if (won) {
        let score = 0;
        for (let i = 0; i < 5; i++) {
          for (let j = 0; j < 5; j++) {
            if (boards[b][i][j] !== -1) {
              score += boards[b][i][j];
            }
          }
        }
        scores.push(score);
      }
    }
    if (scores.length > 0) {
      multi = steps[s];
      break;
    }
  }
  scores.sort((a, b) => b - a);
  return scores[0] * multi;
}

function bingoScoreToLose(boards, steps) {
  let multi = 0;
  for (let s = 0; s < steps.length; s++) {
    for (let b = 0; b < boards.length; b++) {
      for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
          if (boards[b][i][j] === steps[s]) {
            boards[b][i][j] = -1;
          }
        }
      }
      let won = false;
      for (let i = 0; i < 5; i++) {
        let sum = 0;
        let sum2 = 0;
        for (let j = 0; j < 5; j++) {
          sum += boards[b][i][j];
          sum2 += boards[b][j][i];
        }
        if (sum === -5 || sum2 === -5) {
          won = true;
          break;
        }
      }
      if (won) {
        if (boards.length === 1) {
          multi = steps[s];
          let score = 0;
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
              if (boards[0][i][j] !== -1) {
                score += boards[0][i][j];
              }
            }
          }

          return score * multi;
        }
        boards.splice(b, 1);
        b--;
      }
    }
  }
}

const fs = require('fs');
const allFileContents = fs.readFileSync('4.input', 'utf-8');
let lines = allFileContents.split(/\r?\n/);
let steps = lines[0].split(',').map(a => parseInt(a, 10));
let boards = [];
let boardLines = [];
for (let i = 2; i < lines.length; i++) {
  if (lines[i] === '') {
    boards.push(boardLines);
    boardLines = [];
    continue;
  }
  let boardLine = [];
  for (let j = 0; j < lines[i].length; j += 3) {
    boardLine.push(parseInt(lines[i].substring(j, j + 3), 10));
  }
  boardLines.push(boardLine);
}

console.log(bingoScoreToLose(boards, steps));
