/**
 * Ну и опять особо не разгуляешься с решением, не понимаю что в этих задачах
 * такого, что они финальные. Разве что более "клёвые" условия.
 *
 * Посмотрел как ты там оформил второй раз задачи. Ну, конечно, не понимаю,
 * зачем заставили всё это делать. Я еще попробовал прям классом оформить,
 * но не вкурил как обработчик на ввод повешать правильно. А с файлом не хочется
 * заморачиваться:)
 */
function sleightOfHand(k, lines) {
  let digitsCount = new Array(10).fill(0);
  let points = 0;
  k *= 2;
  lines = lines.join('');
  for (let i = 0; i < 16; i++) {
    if (lines[i] === '.') {
      continue;
    }
    digitsCount[parseInt(lines[i])]++;
  }
  for (let i = 1; i <= 9; i++) {
    if (digitsCount[i] && k >= digitsCount[i]) {
      points++;
    }
  }
  return points;
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  const k = inputLines[0];
  const lines = inputLines.slice(1);
  let res = sleightOfHand(k, lines);
  process.stdout.write(res + '');
  process.exit();
});
