/**
 * Даже не знаю, что тут еще придумать.
 * Думал, как можно использовать тот факт, что номера домов уникальные.
 * Так и не придумал.
 */
function nearestZero(houses) {
  let distance = houses.length;
  for (let i = 0; i < houses.length; i++) {
    if (houses[i] === 0) {
      distance = 0;
    } else {
      distance++;
    }
    houses[i] = distance;
  }
  distance = houses.length;
  for (let i = houses.length - 1; i >= 0; i--) {
    if (houses[i] === 0) {
      distance = 0;
    } else {
      distance++;
    }
    houses[i] = Math.min(houses[i], distance);
  }
  return houses.join(' ');
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = nearestZero(inputLines[1].split(' ').map(num => parseInt(num)));
  process.stdout.write(res + '');
  process.exit();
});
