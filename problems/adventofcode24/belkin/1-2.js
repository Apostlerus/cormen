const fs = require('fs');
let numsLeft = [];
let numsRight = {};
const allFileContents = fs.readFileSync('1.input', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line =>  {
  let nums = line.split('   ');
  numsLeft.push(nums[0]);
  numsRight[nums[1]] = numsRight[nums[1]] === undefined ? 1 : numsRight[nums[1]] + 1;
});
// numsLeft.sort((a, b) => b - a);
// numsRight.sort((a, b) => b - a);

let sum = 0;
for (let i = 0; i < numsLeft.length; i += 1) {
  sum += numsLeft[i] * (numsRight[numsLeft[i]] || 0);
}

console.log(sum);
