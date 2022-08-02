/**
 * 81 ms, faster than 65.56%
 */
var hammingDistance = function(x, y) {
  x = x.toString(2).split('').reverse();
  y = y.toString(2).split('').reverse();
  if (y.length > x.length) {
    [x, y] = [y, x];
  }
  let res = 0;
  for (let i = 0; i < x.length; i++) {
    if (y[i] === undefined) {
      if (x[i] === '1') {
        res++;
      }
    }else if (x[i] !== y[i]) {
      res++;
    }
  }
  return res;
};
