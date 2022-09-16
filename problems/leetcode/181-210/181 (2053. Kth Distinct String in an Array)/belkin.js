/**
 * 84 ms, faster than 90.41%
 */
var kthDistinct = function(arr, k) {
  let t = {};
  arr.map(item => {
    if (t[item] === undefined) {
      t[item] = 1;
    } else {
      t[item]++;
    }
  });
  let d = [];
  arr.map(item => {
    if (t[item] === 1) {
      d.push(item);
    }
  });
  if (k > d.length) {
    return '';
  }
  return d[k - 1];
};

let arr = ["d","b","c","b","c","a"], k = 2;
console.log(kthDistinct(arr, k));