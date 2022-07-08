/**
 * 68 ms, faster than 90.24%
 */
var findGCD = function(nums) {
  nums.sort((a, b) => a - b);
  let x = nums[0], y = nums[nums.length - 1];
  for (let i = x; i >= 1; i--) {
    if (x % i === 0 && y % i === 0) {
      return i;
    }
  }
  return 1;
};

let nums = [2,5,6,9,10];
console.log(findGCD(nums));
