/**
 * [3, 41, 52, 26, 38, 57, 9, 49]
 *
 *  распишу просто чтобы самому в голове рекурсию устаканить
 *
 * 1. выбираем случайный pivot q, пусть будет q = Math.floor(array.length / 2) = 8/2 = 4 array[4] = 38
 * 2. получили 2 массива: [p .. q] [3,41,52,26, 38] [q + 1, r] [57, 9 49]
 * 3.1. [3, 41, 52, 26, 38] -> q = 5/2 = 2 = 52
 * 3.1.2 [3,41, 52] [26,38]
 * 3.2.1. [57, 9, 49] -> q = 3/2 = 1 = 9
 * 3.2.2. [57, 9] [49]
 *
 *                                       [3, 41, 52, 26, 38, 57, 9, 49]
 *                                       /             4             \
 *                        [3,41,52,26, 38]                          [57, 9 49]
 *                            /   2   \                             /   1   \
 *                   [3,41, 52]       [26,38]                   [57, 9]   [49]
 *                     /      \           / \                    / 1 \
 *                  [3, 41]   [52]      [26] [38]              [57]  [9]
 *                   /  \
 *                  [3] [41]
 */

function mergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        mergeSort(A, p, q);
        mergeSort(A, q + 1, r);
        merge(A, p, q, r);
    }
}

/**
 * поробуем без рекурсии
 */

function mergeSort(A, p, r) {
    while (p<r) {
        q = Math.ceil(A.length / 2);
        let left = A.splice(0, q);
        let right = A.splice(-q);
        merge(left, right)
    }
}

let left = [2, 2, 3, 5, 8]
let right = [1, 3, 54, 63, 65]
function merge(left, right) {
    let leftLength = left.length
    let rightLength = right.length
    let C = [];
    let k = 0;
    let i = 0;
    let j = 0;
    while(i < leftLength && j < rightLength) {
        if (left[i] < right[j]) {
            C[k++] = left[i++];
        } else {
            C[k++] = right[j++];
        }
    }
    return C;
}
console.log(merge(left, right))