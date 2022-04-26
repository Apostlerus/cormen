/**
 * 136 ms, faster than 90.43%
 * Симуляция в лоб, зато без лишней памяти.
 */
var triangularSum = function(nums) {
  while (nums.length > 1) {
    for (let i = 0; i < nums.length - 1; i++) {
      nums[i] = (nums[i] + nums[i + 1]) % 10;
    }
    nums.pop();
  }
  return nums[0];
};

let nums = [1,2,3,4,5];
console.log(triangularSum(nums));
//8
