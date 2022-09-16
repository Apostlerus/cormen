/**
 * 108 ms, faster than 27.38%
 */
var minimumOperations = function(nums) {
  nums.sort((a, b) => b - a);
  let res = 0;
  while (nums.length) {
    let a = nums[nums.length - 1];
    for (let i = nums.length - 1; i >= 0; i--) {
      nums[i] -= a;
      if (nums[i] === 0) {
        nums.pop();
      }
    }
    if (a > 0) {
      res++;
    }
  }
  return res;
};

let nums = [1,5,0,3,5];
console.log(minimumOperations(nums));