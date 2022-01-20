//а
/**
 * [1, 5], [2, 5], [3, 4], [3, 5], [4, 5]
 */

//б
/**
 * Максимальное будет при отсортирванном в обратном порядке ряду.
 * Тогда будут пары каждого с каждым, но не самого с самим:
 * n(n-1) и с вычетом обратной связки:
 * n(n-1)/2
 */

//в
/**
 * Количество операций такой сортировки ровно такое же, как количество инверсий
 * при том же размере. Ведь мы в процессе сортировки так же сравниваем
 * каждый элемент с каждым другим (кроме себя) один раз.
 */

//г
/**
 * Взял свою функцию мерджа из 1.3-2
 */
function inversionsMerge(arr, start, mid, end) {
  let i, p = i = start, s = mid + 1, temp = [], inversions = 0; //добавил счетчик инверсий
  if (arr[mid] <= arr[s]) {
    return inversions;
  }
  while (i <= mid && s <= end) {
    if (arr[i] <= arr[s]) {      // тут изменил условие на нестрогое, у нас же A[i] > A[j]
      temp[p++] = arr[i++];
    } else {
      temp[p++] = arr[s++];
      inversions += mid + 1 - i; // тут добавил подсчёт
    }
  }
  while (i <= mid) {
    temp[p++] = arr[i++];
  }
  for (let j = start; j <= end; j++) {
    arr[j] = temp[j];
  }
  return inversions; // тут добавил возврат инверсий
}

/**
 * Ну, собстна, рекурсивный мердж с O(NlogN) потому что делим пополам
 */
function countInversions(arr, start, end) {
  if (start >= end) {
    return 0;
  }
  let mid = Math.floor((start + end) / 2),
      inversions = 0;
  inversions += countInversions(arr, start, mid);
  inversions += countInversions(arr, mid + 1, end);
  inversions += inversionsMerge(arr, start, mid, end);
  return inversions;
}

let A = [2, 3, 8, 6, 1];
let B = [6, 5, 4, 3, 2, 1, 0];
let C = [6, 1, 1, 1, 1, 1, 1];
let D = [1, 1, 2, 2, 3, 4, 5];
console.log(countInversions(A, 0, A.length - 1)); // 5
console.log(countInversions(B, 0, B.length - 1)); // 21
console.log(countInversions(C, 0, C.length - 1)); // 6
console.log(countInversions(D, 0, D.length - 1)); // 0
