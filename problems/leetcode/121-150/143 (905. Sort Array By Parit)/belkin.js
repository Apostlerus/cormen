/**
 * 107 ms, faster than 62.84%
 */
var sortArrayByParity = function(nums) {
  nums.sort((a, b) => (a % 2) - (b % 2));
  return nums;
};
