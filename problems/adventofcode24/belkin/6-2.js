const fs = require('fs');
let res = 0;
const allFileContents = fs.readFileSync('6.input', 'utf-8');
const table = [];
let pos = [0, 0];
let d = 'up';
let ds = {
  'up': [-1, 0],
  'right': [0, 1],
  'down': [1, 0],
  'left': [0, -1],
};
let next = {
  'up': 'right',
  'right': 'down',
  'down': 'left',
  'left': 'up',
};
allFileContents.split(/\r?\n/).forEach(line =>  {
  const points = line.split('');
  table.push(points);
  let x = points.indexOf('^');
  if (x !== -1) {
    pos = [table.length - 1, x];
  }
});

const initPos = [pos[0], pos[1]];
let h = table.length;
let w = table[0].length;

let p = new Set();

// p.add(pos.join(','));

while (pos[0] >= 0 && pos[0] < h && pos[1] >= 0 && pos[1] < w) {
  p.add(pos.join(','));
  let newPos = [pos[0] + ds[d][0], pos[1] + ds[d][1]];
  if (table[newPos[0]] && table[newPos[0]][newPos[1]] && table[newPos[0]][newPos[1]] === '#') {
    d = next[d];
    continue;
  }
  pos = [newPos[0], newPos[1]];
}

const pp = [...p];

for (let i = 0; i < pp.length; i += 1) {
  pos = [initPos[0], initPos[1]];
  d = 'up';
  let t = JSON.parse(JSON.stringify(table))
  let prep = pp[i].split(',');
  t[prep[0]][prep[1]] = '#';
  const been = new Set();
  while (pos[0] >= 0 && pos[0] < h && pos[1] >= 0 && pos[1] < w) {
    let newPos = [pos[0] + ds[d][0], pos[1] + ds[d][1]];
    if (t[newPos[0]] && t[newPos[0]][newPos[1]] && t[newPos[0]][newPos[1]] === '#') {
      d = next[d];
      continue;
    }
    pos = [newPos[0], newPos[1]];
    let el = `${pos.join(',')},${d}`;
    if (been.has(el)) {
      res += 1;
      break;
    }
    been.add(el);
  }
}

console.log(res);
