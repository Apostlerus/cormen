/**
 * Блин, тут я заколебался, без каких-то скобок неправильно работало,
 * пришлось расставлять во все места.
 * Ну в общем, степень двойки еще в школе проверяли сдвигом.
 * Так что осталось одну проверку добавить, вычленить степени двойки,
 * которые степени только двойки, а у них от деления на 3 остаток 2
 */
function isPowerOfFour(num) {
  return ((num & (num - 1)) === 0) && (num % 3 === 1) ? 'True' : 'False';
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = isPowerOfFour(parseInt(inputLines[0]));
  process.stdout.write(res + '');
  process.exit();
});

// Пиздец насколько элегантное это решение. Это прям знать надо:)