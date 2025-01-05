const fs = require('fs');
let res = 0;
const allFileContents = fs.readFileSync('5.input', 'utf-8');
const rules = new Set();
let firstPart = true;
allFileContents.split(/\r?\n/).forEach(line =>  {
  if (!line) {
    firstPart = false;
    return;
  }
  if (firstPart) {
    rules.add(line);
    return;
  }
  let nums = line.split(',');
  let found = false;
  for (let i = 0; i < nums.length - 1; i += 1) {
    for (let j = i + 1; j < nums.length;) {
      if (rules.has(`${nums[j]}|${nums[i]}`)) {
        const bubble = nums[i];
        nums.splice(i, 1);
        nums.push(bubble);
        found = true;
        j = i + 1;
      } else {
        j += 1;
      }
    }
  }
  if (found) {
    res += parseInt(nums[(nums.length - 1) / 2]);
  }
});

console.log(res);
