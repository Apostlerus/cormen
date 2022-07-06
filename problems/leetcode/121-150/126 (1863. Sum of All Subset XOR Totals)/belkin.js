/**
 * 64 ms, faster than 97.09%
 */
var subsetXORSum = function(nums) {
  let sum = 0;
  let mask = 1;
  let end = (1 << nums.length) - 1;
  while (mask <= end) {
    let xor = 0;
    for (let i = 0; i < nums.length; i++)
    if (mask & (1 << i)) {
      xor = xor ^ nums[i];
    }
    sum += xor;
    mask++;
  }
  return sum;
};

let nums = [5,1,6];
console.log(subsetXORSum(nums));
//28
