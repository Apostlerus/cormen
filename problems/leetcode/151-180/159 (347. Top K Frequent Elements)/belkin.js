/**
 * 115 ms, faster than 60.24%
 */
var topKFrequent = function(nums, k) {
  let table = {};
  for (let i = 0; i < nums.length; i++) {
    if (table[nums[i]] === undefined) {
      table[nums[i]] = [nums[i], 1];
    } else {
      table[nums[i]][1]++;
    }
  }
  table = Object.values(table);
  table.sort((a, b) => b[1] - a[1]);
  table.splice(k);
  table = table.map(row => row[0]);
  return table;
};

let nums = [1], k = 1;
console.log(topKFrequent(nums, k));
