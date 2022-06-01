/**
 * 163 ms, faster than 71.54%
 */
var minSetSize = function(arr) {
  let counts = {};
  for (let i = 0; i < arr.length; i++) {
    if (counts[arr[i]] === undefined) {
      counts[arr[i]] = 1;
    } else {
      counts[arr[i]]++;
    }
  }
  counts = Object.values(counts);
  counts.sort((a, b) => b - a);
  let result = 0;
  let length = arr.length;
  let half = Math.floor(length / 2);
  let i = 0;
  while (length > half) {
    length -= counts[i++];
    result++;
  }
  return result;
};

let arr = [3,3,3,3,5,5,5,2,2,7];
console.log(minSetSize(arr));
