/**
 * Ну вот так, без промежуточного, сразу ко второму числу прибавляю
 * числа из массива с конца, умноженные на степень 10.
 * Т.о. получаю итоговую сумму.
 * Далее просто беру остаток от деления на 10, закидываю в массив,
 * отнимаю от суммы этот остаток, и делю на 10, переходя к следующему разряду.
 * И так пока число не кончится.
 */
function listAdd(list, num) {
  let res = [];
  for (let i = 0; i < list.length; i++) {
    num += list[(list.length - 1) - i] * (10 ** i);
  }
  while (num > 0) {
    res.unshift(num % 10);
    num = (num - (num % 10)) / 10;
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
  let res = listAdd(inputLines[1].split(' ').map(num => parseInt(num)), parseInt(inputLines[2]));
  process.stdout.write(res + '');
  process.exit();
});
