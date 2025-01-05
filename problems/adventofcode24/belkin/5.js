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
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (rules.has(`${nums[j]}|${nums[i]}`)) {
        return;
      }
    }
  }
  res += parseInt(nums[(nums.length - 1) / 2]);
});

console.log(res);
