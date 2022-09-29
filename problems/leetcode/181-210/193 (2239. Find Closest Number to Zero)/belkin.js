/**
 * 77 ms, faster than 90.67%
 */
var findClosestNumber = function(nums) {
  let diff = Number.MAX_SAFE_INTEGER;
  let num = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    let a = Math.abs(nums[i]);
    if (a < diff) {
      diff = a;
      num = nums[i];
    } else if  (a === diff) {
      if (nums[i] > num) {
        num = nums[i];
      }
    }
  }
  return num;
};

let nums = [2,-1,1];
console.log(findClosestNumber(nums));
