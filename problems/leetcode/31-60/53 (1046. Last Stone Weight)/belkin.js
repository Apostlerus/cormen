/**
 * 65 ms, faster than 83.44%
 */
var lastStoneWeight = function(stones) {
  while (stones.length > 1) {
    stones.sort((a, b) => b - a);
    let smash = stones.shift() - stones.shift();
    if (smash) {
      stones.push(smash);
    }
  }
  return stones.length ? stones[0] : 0;
};

let stones = [2,7,4,1,8,1];
console.log(lastStoneWeight(stones));
