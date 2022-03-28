/**
 * 105 ms, faster than 86.18%
 */
var findDuplicates = function(nums) {
  let counts = new Array(nums.length + 1).fill(0), res = [];
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
    if (counts[nums[i]] > 1) {
      res.push(nums[i]);
    }
  }
  return res;
};

let nums = [1,1,2];
console.log(findDuplicates(nums));
