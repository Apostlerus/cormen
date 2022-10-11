/**
 * 107 ms, faster than 71.29%
 */
var twoSum = function(nums, target) {
  let t = {};
  for (let i in nums) {
    if (t[nums[i]] === undefined) {
      t[nums[i]] = [i];
    } else {
      t[nums[i]].push(i);
    }
  }
  if (((target % 2) === 0) && t[target / 2] !== undefined && t[target / 2].length === 2) {
    return t[target / 2];
  }
  for (let i in nums) {
    if (t[target - nums[i]] !== undefined && t[target - nums[i]][0] !== i) {
      return [i, t[target - nums[i]][0]];
    }
  }
};

let nums = [3,2,4], target = 6;
console.log(twoSum(nums, target));
