/**
 * Решение в лоб, идея в том, что отрезаем нули, создаем временный массив, первый обнуляем, чтобы ссылку сохранить(хак)
 * и сводим задачу к мержу двух отсортированных массивов
 *
 * Runtime
 * Details
 * 52ms
 * Beats 57.21%of users with JavaScript
 * Memory
 * Details
 * 43.83MB
 * Beats 6.82%of users with JavaScript
 *
 * не очень хорошее, но пока идей нет
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let l = 0;
    let r = 0;
    const temp1 = [...nums1].slice(0, m);
    console.log(temp1);

    nums1.length = 0;
    while (l < m || r < n) {
        if (l >= m) {
            nums1.push(nums2[r]);
            r++;
            continue;
        }
        if (r >= n) {
            nums1.push(temp1[l]);
            l++;
            continue;
        }
        if (temp1[l] > nums2[r]) {
            nums1.push(nums2[r]);
            r++;
        } else if (temp1[l] < nums2[r]) {
            nums1.push(temp1[l]);
            l++;
        } else {
            nums1.push(temp1[l]);
            nums1.push(nums2[r]);
            l++;
            r++;
        }
    }
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
//
// merge(nums1, m, nums2, n);
// console.log(nums1);

/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]

визуализация
// 1 2 3 0 0 6
// 1 2 3 0 5 6
// 1 2 2 3 5 6

// 7 8 9 0 0 0 | 2 5 6
// 7 8 0 0 0 9 | 2 5 6
// 7 0 0 0 8 9 | 2 5 6
// 0 0 0 7 8 9 | 2 5 6
// 0 0 6 7 8 9 | 2 5
// 0 5 6 7 8 9 | 2
// 2 5 6 7 8 9 |


// 0 -1 7 0 9 0 0 0 | 2 5 6
// 0 -1 7 0 0 0 0 9 | 2 5 6
// 0 -1 0 0 0 0 7 9 | 2 5 6
// 0 -1 0 0 0 6 7 9 | 2 5
// 0 -1 0 0 5 6 7 9 | 2
// 0 -1 0 2 5 6 7 9 |
идея
1) сравниваем 2 последние
    1.1) если больше первый массив, то меняем местами и перемещаем указатель ЛЕВЫЙ на единицу назад
    1.2) если больше второй массив, то выдергиваем последний элемент и ставим его в указатель КОНЕЦ и перемещаем на единицу назад


Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
 */


/**
 * вторая идея в том, чтобы пихать все вправо
 *
 * интуиция:
 * 1) двигаем в свободные позиции
 * 2) когда позиции закончились все позиции должны быть верные
 *
 * третий план:
 *  запомнить на сколько позициц надо сдвинуть
 *
 *  Runtime
 * Details
 * 56ms
 * Beats 33.65%of users with JavaScript
 * Memory
 * Details
 * 42.37MB
 * Beats 19.85%of users with JavaScript
 *
 * Вроде изящно получилось, но
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
*/
var merge2 = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = m + n - 1;
    while (nums2.length) {
        let item = nums2.pop();
        if (nums1[l] >= item) {
            [nums1[l], nums1[r]] = [nums1[r], nums1[l]];
            l--;
            nums2.push(item);
        } else {
            nums1[r] = item;
        }
        r--;
    }
};

/**
 * Попробуем чуток оптимизировать
 *
 * Runtime
 * Details
 * 48ms
 * Beats 79.34%of users with JavaScript
 * Memory
 * Details
 * 42.12MB
 * Beats 37.01%of users with JavaScript
 *
 * скорость лучше, но с памятью залупа, попробуем использовать уже данные переменные)
 *
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
var merge3 = function(nums1, m, nums2, n) {
    let l = m - 1;
    let r = m + n - 1;
    let r2 = n - 1;
    while (r2 >= 0) {
        if (nums1[l] >= nums2[r2]) {
            [nums1[l], nums1[r]] = [nums1[r], nums1[l]];
            l--;
        } else {
            nums1[r] = nums2[r2];
            r2--;
        }
        r--;
    }
};

/**
 * Используем переменные, что пришли
 *
 * Runtime
 * Details
 * 44ms
 * Beats 92.43%of users with JavaScript
 * Memory
 * Details
 * 42.50MB
 * Beats 14.63%of users with JavaScript
 *
 * скорость вообще какой-то рандом, только что было 95%, потом наоборот хуже.
 * Но выглядит изящно, хоть и хуево читаемо, оставлю финальной версию
 *
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */
const merge4 = (nums1, m, nums2, n) => {
    while (n - 1 >= 0) {
        if (nums1[m - 1] >= nums2[n - 1]) {
            [nums1[m - 1], nums1[m + n - 1]] = [nums1[m + n - 1], nums1[m - 1]];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n - 1];
            n--;
        }
    }
};

merge4(nums1, m, nums2, n);
console.log(nums1);

