/**
 * 87 ms, faster than 53.54%
 */
var sumOfUnique = function(nums) {
  let table = {};
  nums.map(num => {
    if (table[num] === undefined) {
      table[num] = 1;
    } else {
      table[num]++;
    }
  });
  let sum = 0;
  for (let num in table) {
    if (table[num] === 1) {
      sum += parseInt(num);
    }
  }
  return sum;
};

let nums = [1,2,3,2];
console.log(sumOfUnique(nums));
