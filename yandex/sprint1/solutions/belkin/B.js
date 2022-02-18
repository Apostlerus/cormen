/**
 * Ну тоже ничего особого не придумал, только упростить деление,
 * взяв только последнюю цифру. Но чёт мне кажется бессмысленная операция,
 * надо почитать, как происходит деление на 2 под капотом.
 */
function oddsAndEvens(a, b, c) {
  const [aEven, bEven, cEven] = [a, b, c].map(num => num[num.length - 1] % 2 === 0);
  return aEven === bEven && aEven === cEven ? 'WIN' : 'FAIL';
}

const reader = require('readline').createInterface({
  input: process.stdin
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  const [a, b, c] = inputLines[0].split(' ');
  let res = oddsAndEvens(a, b, c);
  process.stdout.write(res + '');
  process.exit();
});
