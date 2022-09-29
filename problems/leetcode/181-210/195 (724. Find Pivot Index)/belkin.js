/**
 * 83 ms, faster than 91.36%
 */
var pivotIndex = function(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i] - leftSum) {
      return i;
    }
    leftSum += nums[i];
  }
  return -1;
};

let nums = [1, 7];
console.log(pivotIndex(nums));
