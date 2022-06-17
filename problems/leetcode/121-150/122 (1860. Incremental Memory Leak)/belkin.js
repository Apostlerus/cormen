/**
 * 92 ms, faster than 31.03%
 * Симуляция тормозная. Должно быть решение получше
 */
var memLeak = function(memory1, memory2) {
  let i;
  for (i = 1; i <= memory1 || i <= memory2; i++) {
    if (memory2 > memory1) {
      memory2 -= i;
    } else {
      memory1 -= i;
    }
  }
  return [i, memory1, memory2];
};

let memory1 = 8, memory2 = 11;
console.log(memLeak(memory1, memory2));
