/**
 * 364 ms, faster than 90.59% - ну это забавный результат)
 */
var rearrangeArray = function(nums) {
  let pos = [], neg = [], res = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      pos.push(nums[i]);
    } else {
      neg.push(nums[i]);
    }
  }
  for (let i = 0; i < pos.length; i++) {
    res.push(pos[i]);
    res.push(neg[i]);
  }
  return res;
};

let nums = [3,1,-2,-5,2,-4];
console.log(rearrangeArray(nums));
