const fs = require('fs');
let nums = [];
let currentSum = 0;
const allFileContents = fs.readFileSync('1.input', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  let num = parseInt(line);
  if (num) {
    currentSum += num;
  } else {
    nums.push(currentSum);
    currentSum = 0;
  }
});
nums.sort((a, b) => b - a);

console.log(nums[0] + nums[1] + nums[2]);
