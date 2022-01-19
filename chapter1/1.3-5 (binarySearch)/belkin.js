/**
 * Пусть n - количество элементов.
 * Бинарный поиск на каждой итерации уменьшает количество элементов n в 2 раза.
 * Т.к. мы на каждом шаге делим n на 2, то при худшем случае количество шагов будет
 * именно log с основанием 2 плюс 1, т.к. из последней пары тоже нужно выбрать,
 * то есть время будет O(logN)
 */
let A = [...Array(1024).keys()];
let v = 1023;

let result = false,
    start = 0,
    end = A.length - 1,
    iterations = 0;
while (end >= start) {
  iterations++;
  let mid = Math.floor((start + end) / 2);
  if (A[mid] === v) {
    result = mid;
    break;
  }
  if (A[mid] < v) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
console.log(iterations); // 11, что есть log(1024) + 1
