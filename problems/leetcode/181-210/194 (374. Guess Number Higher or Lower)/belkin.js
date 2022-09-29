/**
 * 62 ms, faster than 93.73%
 */
var guessNumber = function(n) {
  if (n === 1) {
    return 1;
  }
  let min = 1;
  let mid = Math.ceil((n - min) / 2);
  let pr = -1;
  while (pr !== 0) {
    pr = guess(mid);
    if (pr < 0) {
      n = mid - 1;
    } else if (pr > 0) {
      min = mid + 1;
    } else {
      return mid;
    }
    mid = Math.ceil((n + min) / 2);
  }
};
