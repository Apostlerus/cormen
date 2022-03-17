/**
 * 68 ms, faster than 94.53%
 * Хоть сложность O(n), но прохода - два.
 * Надо еще подумать, как в предложенный один проход уложиться.
 */
var sortColors2 = function(nums) {
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

/**
 *  68 ms, faster than 94.53%
 *  Один хрен. Можно одним проходом "выталкивать" нули вниз и двойки вверх,
 *  пододвигая "края" к середине, пока не дойдешь до верхнего "края".
 *  Но количество операций внутри цикла всё равно больше, так что и время то же.
 *  Хотя у меня уже подозрение что есть какой-то минимум, меньше которого
 *  на литкоде не покажет никогда) Вот были бы бОльшие ряды....
 */
var sortColors = function(nums) {
  let left = 0, mid = 0, right = nums.length - 1;
  while(mid <= right) {
    if (nums[mid] === 2) {
      [nums[mid], nums[right]] = [nums[right], nums[mid]];
      right--;
    } else if (nums[mid] === 0) {
      [nums[mid], nums[left]] = [nums[left], nums[mid]];
      mid++;
      left++;
    } else {
      mid++;
    }
  }
};

let nums = [2,0,1];
sortColors(nums)
console.log(nums);
