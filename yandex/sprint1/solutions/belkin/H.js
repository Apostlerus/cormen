/**
 * Всё-таки заставили меня запилить это не однострочником)
 * Чёт неясно по условию, могут ли быть нули в начале, всё-таки строки на входе,
 * на всякий случай чищу результат от нулей на выходе.
 */
function binarySum(num1, num2) {
  let res = '', temp = 0;
  while (num1 || num2 || temp) {
    temp += +num1.slice(-1) + +num2.slice(-1);
    res = temp % 2 + res;
    temp = temp > 1;
    num1 = num1.slice(0, -1);
    num2 = num2.slice(0, -1);
  }
  return +res ? res.replace(/^0+/, '') : '0';
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = binarySum(inputLines[0], inputLines[1]);
  process.stdout.write(res + '');
  process.exit();
});
