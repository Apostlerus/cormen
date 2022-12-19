const fs = require('fs');
const allFileContents = fs.readFileSync('7.input', 'utf-8');
let t = {};
let f = ['root'];
allFileContents.split(/\r?\n/).forEach(line =>  {
  line = line.split(' ');
  if (line[0] === '$') {
    if (line[1] === 'cd') {
      if (line[2] === '/') {
        f = ['root'];
      } else if (line[2] === '..') {
        f.pop();
      } else {
        f.push(line[2]);
      }
    }
  } else {
    if (!isNaN(line[0])) {
      let fn = '';
      for (let i = 0; i < f.length; i++) {
        fn += '/' + f[i];
        let size = parseInt(line[0]);
        t[fn] = t[fn] + size || size;
      }
    }
  }
});
let nums = Object.values(t);
let res = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] <= 100000) {
    res += nums[i];
  }
}

console.log(res); // Часть 1

nums.sort((a, b) => b - a);
let toDelete = nums[0] - 40000000;
for (let i = nums.length - 1; i > 0; i--) {
  if (nums[i] >= toDelete) {
    console.log(nums[i]); // Часть 2
    break;
  }
}
