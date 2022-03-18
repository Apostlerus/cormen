/**
 * 73 ms, faster than 71.88%
 */
var runningSum = function(nums) {
  let res = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    res.push(nums[i] + res[i - 1]);
  }
  return res;
};

let nums = [3,1,2,10,1];
console.log(runningSum(nums));
