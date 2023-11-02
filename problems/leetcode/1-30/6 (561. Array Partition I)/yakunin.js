/**
 * Интуиция подсказывает, что если мы отсортируем, то меньше потеряем в парах, когда будем искать минимум
 * и на удивление сразу прокатило)
 *
 * Runtime
 * Details
 * 93ms
 * Beats 86.19%of users with JavaScript
 * Memory
 * Details
 * 47.22MB
 * Beats 68.69%of users with JavaScript
 *
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += Math.min(nums[i], nums[i+1]);
    }
    return sum;
};

let nums = [6,2,6,5,1,2];
console.log(arrayPairSum(nums));

/**
 * Далее интуиция подсказывает, что минимальное число всегда слева, ведь это упорядоченный массив))
 * Попробуем сэкономить немножко, то бишь оптимизировать
 *
 * Runtime
 * Details
 * 97ms
 * Beats 69.06%of users with JavaScript
 * Memory
 * Details
 * 47.42MB
 * Beats 55.06%of users with JavaScript
 * Ну реально время от балды берется, ну то есть понятно, что оно зависит от загруженности проца и тд, но,
 * видимо, на небольших расчетах супер большая погрешность. Потому что это решение быстрее должно быть
 */
var arrayPairSum2 = function(nums) {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};

nums = [6,2,6,5,1,2];
console.log(arrayPairSum2(nums));

/**
 * так якобы быстрее, но все-таки разброс
 * Runtime
 * Details
 * 92ms
 * Beats 88.58%of users with JavaScript
 * Memory
 * Details
 * 47.69MB
 * Beats 38.49%of users with JavaScript
 *
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = (nums) => {
    nums.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < nums.length; i += 2) {
        sum += nums[i];
    }
    return sum;
};