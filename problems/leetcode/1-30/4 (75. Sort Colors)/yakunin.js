/**
 * Первая идея использовать мапу и потом заполнить массив
 * можно поизящней, но походу идея не очень
 * Runtime
 * Details
 * 52ms
 * Beats 58.44%of users with JavaScript
 * Memory
 * Details
 * 42.14MB
 * Beats 37.54%of users with JavaScript
 *
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = (nums) => {
    // так создаем мапу, чтобы не нужно было дополнительный иф делать и порядок сохранить (для другой идеи)
    const map = new Map([
        [0, 0],
        [1, 0],
        [2, 0],
    ]);
    nums.forEach(num => {
        map.set(num, map.get(num) + 1);
    });

    nums.fill(0, 0, map.get(0))
        .fill(1, map.get(0), map.get(1) + map.get(0))
        .fill(2, map.get(1) + map.get(0));
};

/**
 * ладно, немного оптимизирую, ради интереса)
 *
 * Runtime
 * Details
 * 51ms
 * Beats 64.85%of users with JavaScript
 * Memory
 * Details
 * 41.72MB
 * Beats 76.62%of users with JavaScript
 * Почему-то думал, что получу отрицательную оптимизацию, но нет, прокатило))
 *
 * @param nums
 */
let sortColors2 = (nums) => {
    const map = new Map([
        [0, 0],
        [1, 0],
        [2, 0],
    ]);
    nums.forEach(num => {
        map.set(num, map.get(num) + 1);
    });

    nums.splice(0, map.get(0), ...(Array(map.get(0)).fill(0)));
    nums.splice(map.get(0), map.get(1), ...(Array(map.get(1)).fill(1)));
    nums.splice(-map.get(2), map.get(2), ...(Array(map.get(2)).fill(2)))
};

/**
 * вторая идея с двумя счетчиками сначала раскидать по сторонам 0 и 2
 *
 * Runtime
 * Details
 * 49ms
 * Beats 75.86%of users with JavaScript
 * Memory
 * Details
 * 42.48MB
 * Beats 15.00%of users with JavaScript
 *
 * По скорости стало быстрее, но по памяти просос)
 *
 * @type {number[]}
 */

let sortColors3 = (nums) => {
    let zero = 0;
    let two = nums.length - 1;
    for (let i = 0; i <= two; i++) {
        if (nums[i] === 2) {
            while(i !== two && nums[two] === 2) {
                two--;
            }
            swap(nums, i, two);
            two--;
        }
        if (nums[i] === 0) {
            if (i !== zero) {
                swap(nums, i, zero);
            }
            zero++;
        }

    }
};

let swap = (nums, i, j) =>  {
    console.log(JSON.stringify(nums), `i=${i} , j=${j}, nums[i]=${nums[i]}, nums[j]=${nums[j]}`);
    [nums[i], nums[j]] = [nums[j], nums[i]];
    console.log(JSON.stringify(nums), i , j, nums[i], nums[j]);
}



const nums = [2,0,2,1,1,0]
sortColors(nums);
console.log(nums);

const nums2 = [2,0,2,1,1,0]
sortColors2(nums2);
console.log(nums2);

const nums3 = [1,2,0]
sortColors3(nums3);
console.log(nums3);