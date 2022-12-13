const fs = require('fs');
const allFileContents = fs.readFileSync('6.input', 'utf-8');
let s;
allFileContents.split(/\r?\n/).forEach(line =>  {
  s = line;
});

function tuningTrouble(s) {
  s = s.split('');
  let w = s.splice(0, 14);
  let res = 14;
  let set = new Set(w);
  if (set.size === w.length) {
    return res;
  }
  for (let i = 0; i < s.length; i++) {
    w.shift();
    w.push(s[i]);
    set = new Set(w);
    if (set.size === w.length) {
      return res + i + 1;
    }
  }
  return res;
}

console.log(tuningTrouble(s));
