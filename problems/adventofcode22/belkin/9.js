const fs = require('fs');
const allFileContents = fs.readFileSync('9.input', 'utf-8');
let moves = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  let [w, c] = line.split(' ');
  for (let i = 0; i < c; i++) {
    moves.push(w);
  }
});

function ropeBridge(moves) {
  let h = [0, 0], t = [0, 0];
  let coords = {U: [-1, 0], D: [1, 0], L: [0, -1], R: [0, 1]};
  let tab = {};
  for (let i = 0; i < moves.length; i++) {
    let old = [h[0], h[1]];
    h[0] += coords[moves[i]][0];
    h[1] += coords[moves[i]][1];
    let yd = Math.abs(h[0] - t[0]);
    let xd = Math.abs(h[1] - t[1]);
    if (yd > 1 || xd > 1) {
      t[0] = old[0];
      t[1] = old[1];
    }
    let k = t.join('x');
    if (tab[k] === undefined) {
      tab[k] = 1;
    }
  }
  return Object.keys(tab).length;
}

console.log(ropeBridge(moves));
