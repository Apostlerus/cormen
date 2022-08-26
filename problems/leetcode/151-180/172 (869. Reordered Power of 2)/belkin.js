/**
 * 80 ms, faster than 62.86%
 */
var reorderedPowerOf2 = function(n) {
  let pows = {};
  for (let i = 0; i <= 30; i++) {
    let pow = Math.pow(2, i).toString(10).split('');
    pow.sort((a, b) => b - a);
    pow = pow.join('');
    pows[pow] = 1;
  }
  n = n.toString(10).split('');
  n.sort((a, b) => b - a);
  n = n.join('');
  return pows[n] !== undefined;
};

let n = 1042;
console.log(reorderedPowerOf2(n));
