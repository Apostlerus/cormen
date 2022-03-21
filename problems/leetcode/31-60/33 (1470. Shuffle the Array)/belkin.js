/**
 * 71 ms, faster than 88.91% ... разминка
 */
var shuffle = function(nums, n) {
  const res = [];
  for (let i = 0; i < n; i++) {
    res.push(nums[i]);
    res.push(nums[i + n]);
  }
  return res;
};

let nums = [2,5,1,3,4,7], n = 3;
console.log(shuffle(nums, n));
