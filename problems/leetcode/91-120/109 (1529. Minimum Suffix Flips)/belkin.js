/**
 * 78 ms, faster than 87.50%
 */
var minFlips = function(target) {
  target = `0${target}`;
  let flips = 0;
  for (let i = 0; i < target.length - 1; i++) {
    if (target[i] !== target[i + 1]) {
      flips++;
    }
  }
  return flips;
};

let target = "10111";
console.log(minFlips(target));
