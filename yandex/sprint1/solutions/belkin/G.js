/**
 * Вроде бы в лоб, без читерских сдвигов)
 */
function toBinary(num) {
  let bin = [];
  for (let pow = 8192; pow > 1; pow /= 2) {
    if (num >= pow) {
      bin.push(1);
      num = num - pow;
    } else {
      if (bin.length) {
        bin.push(0);
      }
    }
  }
  bin.push(num);
  return bin.join('');
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = toBinary(parseInt(inputLines[0]));
  process.stdout.write(res + '');
  process.exit();
});
