/**
 * 81 ms, faster than 69.01%
 */
var minOperations = function(nums) {
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      let steps = nums[i - 1] - nums[i] + 1;
      nums[i] += steps;
      result += steps;
    }
  }
  return result;
};

let nums = [1,5,2,4,1];
console.log(minOperations(nums));
