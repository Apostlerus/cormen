/**
 * 73 ms, faster than 85.31%
 */
var targetIndices = function(nums, target) {
  nums.sort((a, b) => a - b);
  let result = [nums.indexOf(target)];
  if (result[0] === -1) {
    return [];
  }
  for (let i = result[0] + 1; i < nums.length && nums[i] === target; i++) {
    result.push(i);
  }
  return result;
};

let nums = [1,2,5,2,3], target = 3;
console.log(targetIndices(nums, target));
