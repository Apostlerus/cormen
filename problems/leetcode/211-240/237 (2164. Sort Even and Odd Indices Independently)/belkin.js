/**
 * 71 ms Beats 98.99%
 */
var sortEvenOdd = function(nums) {
  let odd = true;
  let o = [], e = [];
  for (let i = 0; i < nums.length; i++) {
    if (odd) {
      o.push(nums[i]);
    } else {
      e.push(nums[i]);
    }
    odd = !odd;
  }
  o.sort((a, b) => a - b);
  e.sort((a, b) => b - a);
  let res = [];
  for (let i = 0; i < o.length; i++) {
    res.push(o[i]);
    if (e[i] !== undefined) {
      res.push(e[i]);
    }
  }
  return res;
};

let nums = [4,1,2,3];

console.log(sortEvenOdd(nums));
