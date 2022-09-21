/**
 * 186 ms, faster than 65.15%
 */
var sumEvenAfterQueries = function(nums, queries) {
  let sum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      sum += nums[i];
    }
  }
  for (let i = 0; i < queries.length; i++) {
    let el = nums[queries[i][1]];
    let add = queries[i][0];
    nums[queries[i][1]] += add;
    if (el % 2 === 0) {
      if (add % 2 === 0) {
        sum += add;
      } else {
        sum -= el;
      }
    } else {
      if (add % 2 !== 0) {
        sum += el + add;
      }
    }
    res.push(sum);
  }
  return res;
};

let nums = [1,2,3,4], queries = [[1,0],[-3,1],[-4,0],[2,3]];
console.log(sumEvenAfterQueries(nums, queries));
