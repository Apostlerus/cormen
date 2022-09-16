/**
 * 133 ms, faster than 29.77%
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
  let nums = [...new Set(nums1), ...new Set(nums2), ...new Set(nums3)];
  nums.sort((a, b) => a - b);
  let res = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      res.push(nums[i]);
    }
  }
  return [...new Set(res)];
};

let nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3];
console.log(twoOutOfThree(nums1, nums2, nums3));
