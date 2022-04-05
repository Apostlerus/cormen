/**
 * 98 ms, faster than 49.80%
 */
var subsetsWithDup = function(nums) {
  nums.sort((a, b) => a - b);
  let pow = Math.pow(2, nums.length) - 1;
  let res = [[]];
  let hashTable = new Set();
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
    let string = item.join('D');
    if (!hashTable.has(string)) {
      res.push(item);
      hashTable.add(string);
    }
  }
  return res;
};

let nums = [1,2,2];
console.log(subsetsWithDup(nums));
