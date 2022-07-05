/**
 * 476 ms, faster than 6.25%
 * В лоб медленно, конечно.
 */
var getKth2 = function(lo, hi, k) {
  let arr = Array.from({length: hi}, (_, i) => i + 1);
  arr.splice(0, lo - 1);
  arr.sort((a, b) => {
    let a1 = a, b1 = b;
    let i = 0, j = 0;
    while (a > 1) {
      if (a % 2 === 0) {
        a = a / 2;
      } else {
        a = (a * 3) + 1;
      }
      i++;
    }
    while (b > 1) {
      if (b % 2 === 0) {
        b = b / 2;
      } else {
        b = (b * 3) + 1;
      }
      j++;
    }
    if (i === j) {
      return a1 - b1;
    }
    return i - j;
  });
  return arr[k - 1];
};

/**
 * 168 ms, faster than 58.33%
 * Ну, уже получше. Линейно считаем Power числа, и подставляем в нужно место
 * массива. И обрезаем справа, т.к. нам не нужно всё что больше k-того числа.
 */
var getKth = function(lo, hi, k) {
  let arr = [];
  for (let a = lo; a <= hi; a++) {
    let a1 = a;
    let i = 0;
    while (a1 > 1) {
      if (a1 % 2 === 0) {
        a1 = a1 / 2;
      } else {
        a1 = (a1 * 3) + 1;
      }
      i++;
    }
    arr.push([a, i]);
    if (arr.length === 1) {
      continue;
    }
    for (let j = arr.length - 2; j >= 0; j--) {
      if (arr[j][1] > arr[j + 1][1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else if (arr[j][1] === arr[j + 1][1]) {
        if (arr[j][0] > arr[j + 1][0]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        } else {
          break;
        }
      } else {
        break;
      }
    }
    if (arr.length > k) {
      arr.pop();
    }
  }
  return arr[arr.length - 1][0];
}

let lo = 12, hi = 15, k = 2;
console.log(getKth(lo, hi, k));
//13
