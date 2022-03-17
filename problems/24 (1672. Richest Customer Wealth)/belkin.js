/**
 * 64 ms, faster than 85.59%
 */
var maximumWealth = function(accounts) {
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < accounts.length; i++) {
    let sum = accounts[i].reduce((sum, x) => sum + x);
    max = Math.max(max, sum);
  }
  return max;
};

let accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts));
