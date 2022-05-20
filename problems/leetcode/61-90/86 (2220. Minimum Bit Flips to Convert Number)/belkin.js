/**
 * 83 ms, faster than 45.74%
 * Может как-то можно посчитать единицы без цикла...
 * Не понимаю, куда время уходит
 */
var minBitFlips = function(start, goal) {
  let res = 0;
  let xor = (start ^ goal).toString(2);
  for (let i = 0; i < xor.length; i++) {
    if (xor[i] === '1') {
      res++;
    }
  }
  return res;
};

let start = 10, goal = 7;
console.log(minBitFlips(start, goal));
//3
