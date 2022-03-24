/**
 * 64 ms, faster than 90.63%
 * Сначала составляем хэш-таблицу сумм камней, потом по ней проверяем наличие
 */
var numJewelsInStones = function(jewels, stones) {
  let table = {}, sum = 0;
  for (let i = 0; i < stones.length; i++) {
    if (!table.hasOwnProperty(stones[i])) {
      table[stones[i]] = 1;
    } else {
      table[stones[i]]++;
    }
  }
  for (let i = 0; i < jewels.length; i++) {
    if (table.hasOwnProperty(jewels[i])) {
      sum += table[jewels[i]];
    }
  }
  return sum;
};

let jewels = "aA", stones = "aAAbbbb";
console.log(numJewelsInStones(jewels, stones));
