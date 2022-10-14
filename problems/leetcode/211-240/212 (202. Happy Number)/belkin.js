/**
 * 70 ms, faster than 93.48%
 */
var isHappy = function(n) {
  for (let x = 0; x < 10 && n < Number.MAX_SAFE_INTEGER; x++) {
    n = n.toString(10);
    let a = 0;
    for (let i = 0; i < n.length; i++) {
      let num = parseInt(n[i]);
      a += num * num;
    }
    n = a;
    if (n === 1) {
      return true;
    }
  }
  return false;
};
