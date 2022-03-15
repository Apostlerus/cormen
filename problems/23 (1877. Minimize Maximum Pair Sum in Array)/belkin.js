/**
 * 3125 ms, faster than 5.05%
 */
var minPairSum = function(nums) {
  let sums = new Set();
  nums.sort((a, b) => a - b);
  while (nums.length) {
    sums.add(nums.pop() + nums.shift());
  }
  return Math.max(...sums);
};

/**
 * 8490 ms, faster than 5.05%
 * Подумал, что предыдущее решение тормозное, но похоже что-то с серваком.
 *
 * Или я что-то сильно не понимаю...
 */
var minPairSum2 = function(nums) {
  let sums = [], res = Number.MIN_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  while (nums.length) {
    sums.push(nums.pop() + nums.shift());
  }
  for (let i = 0; i < sums.length; i++) {
    res = Math.max(res, sums[i]);
  }
  return res;
};

let nums = [3,5,4,2,4,6];
console.log(minPairSum2(nums));
