/**
 *  62 ms, faster than 89.96%
 */
var tribonacci = function(n) {
  let arr = [0, 0, 1];
  for (let i = 3; i < n + 3; i++) {
    arr.push(arr[i - 1] + arr[i - 2] + arr[i - 3]);
  }
  return arr[n + 1];
}
