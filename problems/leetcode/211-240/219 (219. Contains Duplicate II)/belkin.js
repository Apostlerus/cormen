/**
 * 340 ms, faster than 23.51%
 */
var containsNearbyDuplicate = function(nums, k) {
  if (k < 1) {
    return false;
  }
  k++;
  k = Math.min (k, nums.length);
  let arr = [];
  let t = {};
  for (let i = 0; i < k; i++) {
    arr.push(nums[i]);
    t[nums[i]] = t[nums[i]] + 1 || 1;
    if (t[nums[i]] > 1) {
      return true;
    }
  }
  if (nums.length === k) {
    return false;
  }
  for (let i = k; i < nums.length; i++) {
    let last = arr.shift();
    t[last]--;
    t[nums[i]] = t[nums[i]] + 1 || 1;
    if (t[nums[i]] > 1) {
      return true;
    }
  }
  return false;
};

let nums = [1,2,3,1], k = 3;

console.log(containsNearbyDuplicate(nums, k));
