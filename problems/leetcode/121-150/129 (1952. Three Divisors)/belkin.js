/**
 * 71 ms, faster than 81.32%
 */
var isThree = function(n) {
  let divisorsCount = 2;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      divisorsCount++;
    }
  }
  return divisorsCount === 3;
};

let n = 4;
console.log(isThree(n));
