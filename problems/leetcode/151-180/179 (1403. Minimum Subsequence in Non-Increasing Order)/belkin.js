/**
 * 112 ms, faster than 62.89%
 */
var minSubsequence = function(nums) {
  let res = [];
  nums.sort((a, b) => b - a);
  let as = 0;
  nums.map(item => {
    as += item;
  });
  as = Math.floor(as / 2);
  let sum = 0;
  let i = 0;
  while (sum <= as) {
    res.push(nums[i]);
    sum += nums[i];
    i++;
  }
  return res;
};