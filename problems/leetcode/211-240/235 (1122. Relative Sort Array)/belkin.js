/**
 * 55 ms Beats 99.67%
 */
var relativeSortArray = function(arr1, arr2) {
  let t = {};
  for (let i = 0; i < arr2.length; i++) {
    t[arr2[i]] = i;
  }
  let left = [], right = [];
  for (let i = 0; i < arr1.length; i++) {
    if (t[arr1[i]] !== undefined) {
      left.push(arr1[i]);
    } else {
      right.push(arr1[i]);
    }
  }
  left.sort((a, b) => t[a] - t[b]);
  right.sort((a, b) => a - b);
  return left.concat(right);
};

let arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6];

console.log(relativeSortArray(arr1, arr2));
