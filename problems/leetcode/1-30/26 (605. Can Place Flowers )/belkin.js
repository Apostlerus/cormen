/**
 * 71 ms, faster than 94.07%
 * Продолжаем простые задачи с некоторыми крайними кейсами.
 */
var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length && n > 0; i++) {
    if (flowerbed[i] === 1) {
      i++;
      continue;
    }
    if ((flowerbed[i - 1] === undefined || flowerbed[i - 1] !== 1)
      && (flowerbed[i + 1] === undefined || flowerbed[i + 1] !== 1)
    ) {
      flowerbed[i] = 1;
      i++
      n--;
    }
  }
  return n === 0;
};

let flowerbed = [0,0,1,0,1], n = 1;
console.log(canPlaceFlowers(flowerbed, n));
