/**
 * 81 ms, faster than 82.04%
 */
var divideArray = function(nums) {
  nums.sort((a, b) => a - b);
  while (nums.length) {
    let last = nums.pop();
    if (last !== nums.pop()) {
      return false;
    }
  }
  return true;
};

let nums = [3,2,3,2,2,2,1,3];
console.log(divideArray(nums));
