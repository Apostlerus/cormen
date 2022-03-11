/**
 * 56 ms, faster than 98.17%
 */
var removeElement = function(nums, val) {
  let res = nums.length;
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      res--;
      nums.splice(i, 1);
      continue;
    }
    i++;
  }
  return res;
};

let nums = [0,1,2,2,3,0,4,2], val = 2;
console.log(removeElement(nums, val));
console.log(nums);
