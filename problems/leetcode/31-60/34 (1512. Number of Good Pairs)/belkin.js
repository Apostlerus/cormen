/**
 * 71 ms, faster than 70.53%
 * Не совсем в лоб.
 * Тесты показывают не лучшее время. Но на больших тестах отрыв
 * от решения в лоб был бы значительный.
 */
var numIdenticalPairs = function(nums) {
  let distinct = {}, sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!distinct.hasOwnProperty(nums[i])) {
      distinct[nums[i]] = 1;
    } else {
      distinct[nums[i]]++;
    }
  }
  for (let num in distinct) {
    sum += distinct[num] * (distinct[num] - 1) / 2;
  }
  return sum;
};

let nums = [1,2,3,1,1,3];
console.log(numIdenticalPairs(nums));
