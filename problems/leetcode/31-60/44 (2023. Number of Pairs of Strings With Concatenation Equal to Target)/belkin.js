/**
 * 82 ms, faster than 75.90%
 */
var numOfPairs = function(nums, target) {
  let sum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        sum++;
      }
      if (nums[j] + nums[i] === target) {
        sum++;
      }
    }
  }
  return sum;
};

let nums = ["123","4","12","34"], target = "1234";
console.log(numOfPairs(nums, target));
