/**
 * 77 ms, faster than 100.00%
 */
var applyOperations = function(nums) {
  let left = [];
  let right = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === 0) {
      right.push(0);
      continue;
    }
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
    left.push(nums[i]);
  }
  let last = nums.pop();
  if (last) {
    left.push(last);
  } else {
    right.push(last);
  }
  return [...left, ...right];
};

let nums = [1,2,2,1,1,0];

console.log(applyOperations(nums));
