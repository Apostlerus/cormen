/**
 * 175 ms, faster than 30.99%
 */
var findClosestElements = function(arr, k, x) {
  arr.forEach((num, i) => {
    arr[i] = [num, Math.abs(num - x)];
  });
  arr.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });
  k = Math.min(k, arr.length);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(arr[i][0]);
  }
  res.sort((a, b) => a - b);
  return res;
};

let arr = [1,2,3,4,5], k = 4, x = -1;
console.log(findClosestElements(arr, k, x));
