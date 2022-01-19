let S = [12, 4, 16, 35, 2, 1, 2, 12];
let x = 24;

function binarySearch(A, diff, index) {
  let start = 0,
      end = A.length - 1;
  while (end >= start) {
    let mid = Math.floor((start + end) / 2);
    if (A[mid] === diff) {
      if (mid !== index) {
        return true;
      } else {
        start = mid + 1;
      }
    }
    if (A[mid] < diff) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return false;
}

S.sort();

/**
 * для каждого элемента от 0 до n-1 возьмем разницу меду x и элементом.
 * И будем её бинарно искать среди оставшихся. Если такой элемент найден,
 * значит сумма найденного и текущего и будет x.
 * В функцию поиска передадим текущий индекс, чтобы исключить этот элемент,
 * т.к. нам нужна сумма из двух разных элементов.
 */
let result = false;
for (let i = 0; i < S.length - 1; i++) { // O(n)
  let diff = x - S[i];
  result = binarySearch(S, diff, i);     // O(logN)
  if (result) {
    break;
  }
}
/**
 * Итого: первая сортировка O(NlogN),
 * потом O(n) * O(logN) - O(NlogN),
 * В сумме два раза по O(NlogN) будет O(NlogN)
 */
console.log(result);
