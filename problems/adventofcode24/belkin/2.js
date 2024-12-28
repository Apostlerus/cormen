const fs = require('fs');
let res = 0;
const allFileContents = fs.readFileSync('2.input', 'utf-8');
function isSafe(numbs) {
  let lmf = numbs[numbs.length - 1] - numbs[0];
  if (lmf === 0) {
    return;
  }
  let a = 1;
  let b = 3;
  if (lmf < 0) {
    a = -3;
    b = -1;
  }
  let safe = true;
  for (let i = 0; i < numbs.length - 1; i += 1) {
    const diff = numbs[i + 1] - numbs[i];
    if (!(diff >= a && diff <= b)) {
      safe = false;
      break;
    }
  }
  return safe;
}
allFileContents.split(/\r?\n/).forEach(line =>  {
  let nums = line.split(' ');
  if (isSafe(nums)) {
    res += 1;
    return;
  }
});
console.log(res);

let res2 = 0;
allFileContents.split(/\r?\n/).forEach(line =>  {
  let nums = line.split(' ');
  let t = line.split(' ');
  if (isSafe(nums)) {
    res2 += 1;
    return;
  }
  for (let i = 0; i < nums.length; i += 1) {
    nums.splice(i, 1);
    console.log(t);
    console.log(nums);
    if (isSafe(nums)) {
      res2 += 1;
      return;
    }
    nums = [...t];
  }
});
console.log(res2);
