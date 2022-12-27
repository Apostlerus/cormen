/**
 * 64 ms Beats 96.81%
 */
var trimMean = function(arr) {
  let m = Math.ceil(arr.length * 0.05);
  arr.sort((a, b) => a - b);
  arr.splice(0, m);
  arr.splice(m * -1, m);
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

let arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];

console.log(trimMean(arr));
