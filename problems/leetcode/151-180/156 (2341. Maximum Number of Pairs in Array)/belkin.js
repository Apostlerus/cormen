/**
 * 68 ms, faster than 93.27%
 */
var numberOfPairs = function(nums) {
  nums.sort((a, b) => a - b);
  let pairs = 0;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] === nums[i - 1]) {
      nums.pop();
      nums.pop();
      i--;
      pairs++;
    }
  }
  return [pairs, nums.length];
};

let nums = [1, 1];
console.log(numberOfPairs(nums));
