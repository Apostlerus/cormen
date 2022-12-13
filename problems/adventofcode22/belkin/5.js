const fs = require('fs');
const allFileContents = fs.readFileSync('5.input', 'utf-8');
let stacks = {};
let stackLines = [];
let moves = [];
let c = 1;
const regex = /\d+/g;
allFileContents.split(/\r?\n/).forEach(line =>  {
  if (c <= 8) {
    stackLines.push(line);
  } else if (c > 10) {
    let move = line.match(regex);
    moves.push(move);
  }
  c++;
});

function getStacks(stackLines) {
  let stacks = {};
  for (let j = 0; j < 9; j++) {
    stacks[j + 1] = [];
    for (let i = 7; i >= 0; i--) {
      let s = stackLines[i][j * 4 + 1];
      if (s.length && s !== ' ') {
        stacks[j + 1].push(s);
      }
    }
  }
  return stacks;
}
stacks = getStacks(stackLines);

function supplyStacks(stacks, moves) {
  for (let i = 0; i < moves.length; i++) {
    let [x, f, t] = moves[i];
    let temp = stacks[f].splice(Math.max(stacks[f].length - x, 0), x);
    stacks[t] = stacks[t].concat(temp.reverse());
  }
  let res = '';
  for (let i = 1; i < 10; i++) {
    res += stacks[i][stacks[i].length - 1];
  }
  return res;
}

function supplyStacksNew(stacks, moves) {
  for (let i = 0; i < moves.length; i++) {
    let [x, f, t] = moves[i];
    let temp = stacks[f].splice(Math.max(stacks[f].length - x, 0), x);
    stacks[t] = stacks[t].concat(temp);
  }
  let res = '';
  for (let i = 1; i < 10; i++) {
    res += stacks[i][stacks[i].length - 1];
  }
  return res;
}

console.log(supplyStacksNew(stacks, moves));
