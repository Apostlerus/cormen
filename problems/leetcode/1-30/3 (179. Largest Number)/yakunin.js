/**
 * Runtime
 * Details
 * 58ms
 * Beats 54.21%of users with JavaScript - оставляет желать лучшего
 * Memory
 * Details
 * 43.34MB
 * Beats 96.03%of users with JavaScript <- почти всех победило решение по памяти
 *
 * P.S посмотрел твое решение, у тебя более элегантно и по процессору хорошо получилось!
 * @param {number[]} nums
 * @return {string}
 */
let largestNumber = (nums) => {
    const strings = nums.map(num => num.toString());
    // тут использую BigInt, чтобы не делать дополнительных проверок на "00" "000" и тд
    return BigInt(nums.map(num => num.toString()).sort(compareTwoNumbers2).join('')).toString();
};

let compareTwoNumbers = (string1, string2) => {
    const first = string1 + string2;
    const second = string2 + string1;
    if (first > second) {
        return -1;
    }
    if (second < first) {
        return 1;
    }
    return 0;
}

/**
 * заменил на тернарник и о чудо:
 * Runtime
 * Details
 * 48ms
 * Beats 92.37%of users with JavaScript
 * Memory
 * Details
 * 43.43MB
 * Beats 93.48%of users with JavaScript
 * почему - хз)
 *
 * @param string1
 * @param string2
 * @returns {number}
 */
let compareTwoNumbers2 = (string1, string2) => {
    const first = string1 + string2;
    const second = string2 + string1;
    return first > second ? -1 : second < first ? 1 : 0
}

// Размышления:
// 123 124 -> 124123
// 123 12 -> 12312
// 120 12 -> 12120
// 1204 12 -> 121204

// 121 12 -> 12112 12121
// 122 12 -> 12212 12122
// 1200000003 12 -> 12120000003

// алгоритм не получился посимвольный, поэтому пришла идея просто взять 2 варианта и сравнивать)