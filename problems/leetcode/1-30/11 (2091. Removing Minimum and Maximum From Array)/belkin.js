/**
 * 107 ms, faster than 79.12%
 * Ну даже не знаю, куда уж быстрее
 */
var minimumDeletions = function(nums) {
  if (nums.length === 1) {
    return 1;
  }
  if (nums.length < 4) {
    return 2;
  }
  let min = nums[0], max = nums[0], minIndex = 0, maxIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
      minIndex = i;
    }
    if (nums[i] > max) {
      max = nums[i];
      maxIndex = i;
    }
  }
  let indexes = [minIndex, maxIndex].sort((a, b) => a - b);
  let ranges = [indexes[0] + 1, nums.length - indexes[1], indexes[1] - indexes[0]];
  ranges.sort((a, b) => a - b);
  return ranges[0] + ranges[1];
};

let nums = [41,-47,-26,57,82,-23,47,52,42,79,2,77,0,-4,1,-99,-57,72,-95];
console.log(minimumDeletions(nums));
