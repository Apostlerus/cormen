/**
 * 112 ms, faster than 83.56%
 */
var sortArrayByParityII = function(nums) {
  let o = [];
  let e = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      e.push(nums[i]);
    } else {
      o.push(nums[i]);
    }
  }
  for (let i = 0; i < o.length; i++) {
    nums[i * 2] = e[i];
    nums[(i * 2) + 1] = o[i];
  }
  return nums;
};

let nums = [4,2,5,7];
console.log(sortArrayByParityII(nums));
