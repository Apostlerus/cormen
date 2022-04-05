/**
 * 72 ms, faster than 77.63%
 * Занятная задачка)
 */
var subsets = function(nums) {
  let pow = Math.pow(2, nums.length) - 1;
  let res = [[]];
  for (let i = 1; i <= pow; i++) {
    let binary = i.toString(2);
    while (binary.length < nums.length) {
      binary = '0' + binary;
    }
    let item = [];
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === '1') {
        item.push(nums[j]);
      }
    }
    res.push(item);
  }
  return res;
};

let nums = [1,2,3];
console.log(subsets(nums));
