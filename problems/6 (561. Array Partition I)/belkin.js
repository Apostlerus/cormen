/**
 * 108 ms, faster than 97.54%
 */
var arrayPairSum = function(nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i +=2) {
    sum += nums[i];
  }
  return sum;
};

let nums = [6,2,6,5,1,2];
console.log(arrayPairSum(nums));
