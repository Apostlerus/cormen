/**
 * 371 ms, faster than 75.26%
 * Бомбическое время :) Ну зато спред красивый
 */
var pivotArray = function(nums, pivot) {
  let lower = [], equal = [], higher = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < pivot) {
      lower.push(nums[i]);
    } else if (nums[i] > pivot) {
      higher.push(nums[i]);
    } else {
      equal.push(nums[i]);
    }
  }
  return [...lower, ...equal, ...higher];
};

let nums = [9,12,5,10,14,3,10], pivot = 10;
console.log(pivotArray(nums, pivot)); //[9,5,3,10,10,12,14]
