/**
 * Это уже финишная версия. Нормально, быстро, в сравнении с брутфорсом.
 */
function lanternfishGrow(fishes) {
  let fish = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0};
  for (let f = 0; f < fishes.length; f++) {
    fish[fishes[f]]++;
  }
  for (let d = 0; d < 256; d++) {
    let news = {
      0: 0 + fish[1],
      1: 0 + fish[2],
      2: 0 + fish[3],
      3: 0 + fish[4],
      4: 0 + fish[5],
      5: 0 + fish[6],
      6: 0 + fish[7] + fish[0],
      7: 0 + fish[8],
      8: 0 + fish[0],
    };
    for (let i = 0; i <= 8; i++) {
      fish[i] = 0 + news[i];
    }
  }
  let count = 0;
  for (let i = 0; i <= 8; i++) {
    count += fish[i];
  }
  return count;
}

/**
 * Первая медленная версия. Сработала на 80 днях, хоть и медленно.
 * Но на 256 уже фатал еррор. Пробовал разбить массив на чанки
 * и в два этапа всё пересчитать, но скрипт ушел думать надолго.
 */
function lanternfishGrowBrutal(fishes) {
  let count = 0;
  for (let f = 0; f < fishes.length; f++) {
    let fish = [fishes[f]];
    for (let d = 0; d < 80; d++) {
      let news = 0;
      for (let i = 0; i < fish.length; i++) {
        if (fish[i] === 0) {
          fish[i] = 6;
          news++;
          continue;
        }
        fish[i]--;
      }
      for (let j = 0; j < news; j++) {
        fish.push(8);
      }
    }
    count += fish.length;
  }
  return count;
}

const fs = require('fs');
const allFileContents = fs.readFileSync('6.input', 'utf-8');
let fish = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  fish = line.split(',').map(a => parseInt(a, 10));
});

console.log(lanternfishGrow(fish));
