/**
 * 104 ms, faster than 20.20%
 */
var countPairs = function(nums, k) {
  let result = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && ((i * j) % k) === 0) {
        result++;
      }
    }
  }
  return result;
};

let nums = [3,1,2,2,2,1,3], k = 2;
console.log(countPairs(nums, k));
//4
