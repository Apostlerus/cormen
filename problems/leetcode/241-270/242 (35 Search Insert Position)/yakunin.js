/**
 * Runtime
 * 42 ms
 * Beats
 * 95.4%
 * Memory
 * 42.7 MB
 * Beats
 * 13.52%
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const midIndex = low + ((high - low) >> 1);
        const mid = nums[midIndex];
        if (mid === target) {
            return midIndex;
        }
        else if (mid > target) {
            high = midIndex - 1;
        } else {
            low = midIndex + 1;
        }
    }
    return low;
};

/**
 * Забавно, что такой вариант бьет 95% по памяти, а предыдущий 95% по процессору)
 *
 * Runtime
 * 44 ms
 * Beats
 * 90.48%
 * Memory
 * 41.5 MB
 * Beats
 * 95.47%
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        const midIndex = (low + high) >> 1;
        const mid = nums[midIndex];
        if (mid === target) {
            return midIndex;
        }
        else if (mid > target) {
            high = midIndex - 1;
        } else {
            low = midIndex + 1;
        }
    }
    return low;
};