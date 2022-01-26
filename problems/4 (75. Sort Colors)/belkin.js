/**
 * 68 ms, faster than 94.53%
 * Хоть сложность O(n), но прохода - два.
 * Надо еще подумать, как в предложенный один проход уложиться.
 */
var sortColors = function(nums) {
  let counts = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++;
  }
  let count = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = count; j < count + counts[i]; j++) {
      nums[j] = i;
    }
    count += counts[i];
  }
};

let nums = [2,0,2,1,1,0];
sortColors(nums)
console.log(nums);
