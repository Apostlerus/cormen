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

/**
 * 308 ms, faster than 96.89%
 * o_O Да что с этой задачей не так...
 * Избавился от shift, стало значительно быстрее. Но все равно не понимаю, откуда
 * такое время.
 */
var minPairSum3 = function(nums) {
  let sums = new Set(), i = 0, j = nums.length - 1, res = Number.MIN_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  while (i < j) {
    sums.add(nums[i++] + nums[j--]);
  }
  sums = [...sums];
  for (let i = 0; i < sums.length; i++) {
    res = Math.max(res, sums[i]);
  }
  return res;
};

let nums = [3,5,4,2,4,6];
console.log(minPairSum3(nums));
