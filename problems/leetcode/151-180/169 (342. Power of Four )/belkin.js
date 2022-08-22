/**
 * 65 ms, faster than 96.48%
 */
var isPowerOfFour = function(n) {
  if (n <= 0) {
    return false;
  }
  if (n === 1) {
    return true;
  }
  n = n.toString(2).substring(1);
  return parseInt(n) === 0 && (n.length % 2) === 0;
};

let n = 17;
console.log(isPowerOfFour(n));
