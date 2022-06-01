/**
 * 100 ms, faster than 48.66%
 * Нууу я не знаю, куда уж быстрее, один проход, и то не до конца...
 */
var repeatedNTimes = function(nums) {
  let length = nums.length;
  let counts = {};
  for (let i = 0; i < length; i++) {
    if (counts[nums[i]] === undefined) {
      counts[nums[i]] = 1;
    } else {
      counts[nums[i]]++;
      if (counts[nums[i]] === length / 2) {
        return nums[i];
      }
    }
  }
};

let nums = [2,1,2,5,3,2];
console.log(repeatedNTimes(nums));
