/**
 * 72 ms, faster than 97.37%
 * Если не в лоб решать, то можно и большие тесты потянуть,
 * и задача уже не самая элементарная. Но и не сложная.
 */
var smallerNumbersThanCurrent = function(nums) {
  let sorted = [...nums].sort((a, b) => a - b);
  let table = {};
  table[sorted[0]] = 0;
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) {
      continue;
    }
    table[sorted[i]] = i;
  }
  let res = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    res[i] = table[nums[i]];
  }
  return res;
};

let nums = [8,1,2,2,3];
console.log(smallerNumbersThanCurrent(nums));
