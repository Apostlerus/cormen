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

/**
 * 76 ms, faster than 92.46%
 * Ок, по матеше не придумал красивых решений. Каюсь, подсмотрел, что можно же
 * поиск сделать двоичным. Стало несколько быстрее.
 */
var mySqrt2 = function(x) {
  if (x === 0) {
    return 0;
  }
  if (x < 4) {
    return 1;
  }
  let min = 2, max = 92681;
  while (max - min > 1) {
    let mid = Math.floor((max + min) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid > x) {
      max = mid;
    } else {
      min = mid;
    }
  }
  return min;
};

let x = 8;
console.log(mySqrt2(x));
