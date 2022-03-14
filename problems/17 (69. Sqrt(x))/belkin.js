/**
 * 101 ms, faster than 66.29%
 * Мда уж, время не очень, решение в лоб, конечно. Надо подумать как математик.
 */
var mySqrt = function(x) {
  if (x === 0) {
    return 0;
  }
  if (x < 4) {
    return 1;
  }
  let res = 2;
  while (res * res <= x) {
    res++
  }
  return res - 1;
};

let x = 15;
console.log(mySqrt(x));
