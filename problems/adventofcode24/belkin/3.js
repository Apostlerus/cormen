const fs = require('fs');
let res = 0;
const input = fs.readFileSync('3.input', 'utf-8');

let matches = input.match(/mul\((\d+),(\d+)\)/g);

for (let i = 0; i < matches.length; i += 1) {
  let nums = matches[i].match(/(\d+)/g).map((n) => parseInt(n, 10));
  if (nums[0] > 999 || nums[0] < 0 || nums[1] > 999 || nums[1] < 0) {
    continue;
  }
  res += nums[0] * nums[1];
}

console.log(res);
