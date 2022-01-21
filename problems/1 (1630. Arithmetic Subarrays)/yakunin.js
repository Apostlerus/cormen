/**
 * Я тут говномонстра какого-то сколотил с использованием моих любымих множеств)) // 146 ms	45.6 MB  faster than 92.00%
 * Тут типа идея в том, что берем минальное значение и добавляем разность арифметической прогрессии
 * Я сначала хотел захакать через формулу суммы, даже до 61-го теста дошел, но дальше сфейлился, хотя было бы быстрее))
 *
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    let result = []
    for (let i = 0; i < l.length; i++) {
        let min = nums[l[i]]
        let max = nums[l[i]]
        let count = 0
        let sum = 0
        let set = new Set()
        for (let j = l[i]; j <= r[i]; j++) {
            count++;
            sum += nums[j]
            min = min > nums[j] ? nums[j] : min;
            max = max > nums[j] ? max: nums[j];
            set.add(nums[j])
        }
        let d = (max - min)/(count - 1);
        let possible = true;
        for (let z = 1; z < set.size; z++) {
            if (!set.has(min + z*d)) {
                possible = false;
                break;
            }
        }
        result.push(possible)
    }
    return result;
};

let nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5];

console.log(checkArithmeticSubarrays(nums, l, r));