const fs = require('fs');
const allFileContents = fs.readFileSync('4.input', 'utf-8');
let pairs = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  let pair = line.split(',');
  pair[0] = pair[0].split('-').map(num => parseInt(num));
  pair[1] = pair[1].split('-').map(num => parseInt(num));
  pairs.push(pair);
});

function campCleanup(pairs) {
  let res = 0;
  pairs.forEach(pair => {
    if ((pair[0][0] <= pair[1][0] && pair[0][1] >= pair[1][1])
      || (pair[0][0] >= pair[1][0] && pair[0][1] <= pair[1][1])
    ) {
      res++;
    }
  });
  return res;
}

function campCleanupOverlap(pairs) {
  let res = 0;
  pairs.forEach(pair => {
    if ((pair[0][1] >= pair[1][0] && pair[0][1] <= pair[1][1])
      || (pair[0][0] >= pair[1][0] && pair[0][0] <= pair[1][1])
      || (pair[1][0] >= pair[0][0] && pair[1][0] <= pair[0][1])
      || (pair[1][1] >= pair[0][0] && pair[1][1] <= pair[0][1])
    ) {
      res++;
    }
  });
  return res;
}

console.log(campCleanupOverlap(pairs));
