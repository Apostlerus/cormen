const fs = require('fs');
const allFileContents = fs.readFileSync('3.input', 'utf-8');
let sum = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
  let t = {};
  for (let i = 0 ; i < line.length / 2; i++) {
    t[line[i]] = t[line[i]] + 1 || 1;
  }
  for (let i = line.length / 2 ; i < line.length; i++) {
    if (t[line[i]] !== undefined) {
      let code = line[i].charCodeAt(0) - 96;
      if (code < 1) {
        code += 58;
      }
      sum += code;
      break;
    }
  }
});

console.log(sum);
