/**
 * 74 ms, faster than 77.00%
 */
var countKDifference = function(nums, k) {
  let table = {};
  nums.map(num => {
    if (table.hasOwnProperty(num)) {
      table[num]++;
    } else {
      table[num] = 1;
    }
  });
  let res = 0;
  for (let num in table) {
    let search = parseInt(num) + k;
    if (table.hasOwnProperty(search)) {
      res += table[num] * table[search];
    }
  }
  return res;
};

let nums = [1,2,2,1], k = 1;
console.log(countKDifference(nums, k));
