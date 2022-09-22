/**
 * 160 ms, faster than 97.63%
 */
var minimumAbsDifference = function(arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] === minDiff) {
      res.push([arr[i], arr[i + 1]]);
    }
  }
  return res;
};

let arr = [4,2,1,3];
console.log(minimumAbsDifference(arr));
