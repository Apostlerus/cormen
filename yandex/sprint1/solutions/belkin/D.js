/**
 * Сразу разбираю крайние ситуации, потом прохожу по остальным.
 */
function temperatureRandomness(temperatures) {
  const days = temperatures.length;
  if (days === 1) {
    return 1;
  }
  let randomness = 0;
  if (temperatures[0] > temperatures[1]) {
    randomness++;
  }
  if (temperatures[days - 1] > temperatures[days - 2]) {
    randomness++;
  }
  for (let i = 1; i < days - 1; i++) {
    if (temperatures[i] > temperatures[i - 1] && temperatures[i] > temperatures[i + 1]) {
      randomness++;
    }
  }
  return randomness;
}

const reader = require('readline').createInterface({
  input: process.stdin
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  const temperatures = inputLines[1].split(' ').map(num => parseInt(num));
  let res = temperatureRandomness(temperatures);
  process.stdout.write(res + '');
  process.exit();
});
