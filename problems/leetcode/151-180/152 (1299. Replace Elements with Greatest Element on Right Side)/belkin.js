/**
 * 265 ms, faster than 39.41%
 */
var replaceElements = function(arr) {
  for (let i = 0; i < arr.length - 1; i ++) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    arr[i] = max;
  }
  arr[arr.length - 1] = -1;
  return arr;
};

let arr = [17,18,5,4,6,1];
console.log(replaceElements(arr));
// [18,6,6,6,1,-1]
