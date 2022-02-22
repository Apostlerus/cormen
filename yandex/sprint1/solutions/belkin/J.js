/**
 * Ну, в общем, это я тоже уже где-то делал.
 * Я смотрю, с твоим решением почти совпадает,
 * только я не понял твою мысль в решениях с проверкой isPrime
 */
function getPrimeFactors(num) {
  let res = [];
  for (let i = 2; i <= num;) {
    if (num % i === 0) {
      num /= i;
      res.push(i);
    } else {
      i++;
    }
  }
  return res.join(' ');
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = getPrimeFactors(parseInt(inputLines[0]));
  process.stdout.write(res + '');
  process.exit();
});
