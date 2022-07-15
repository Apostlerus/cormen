/**
 * 64 ms, faster than 97.45%
 */
var sumZero = function(n) {
  if (n === 1) {
    return [0];
  }
  let res = [];
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    res.push(i);
    res.push(i * -1);
  }
  if (n % 2 > 0) {
    res.push(0);
  }
  return res;
};

let n = 2;
console.log(sumZero(n));
