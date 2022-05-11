/**
 * 102 ms, faster than 24.10%
 * Ну такое себе, попробуем по-другому.
 */
var largestGoodInteger = function(num) {
  let max = -1;
  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] === num[i + 1] && num[i] === num[i + 2]) {
      max = Math.max(max, parseInt(num[i] + num[i] + num[i]));
    }
  }
  if (max === -1) {
    return '';
  }
  if (max === 0) {
    return '000';
  }
  return max.toString();
};

/**
 * 62 ms, faster than 96.79%
 * Ок ок.
 */
var largestGoodInteger2 = function(num) {
  for (let i = 9; i >= 0; i--) {
    let a = i.toString();
    if (num.indexOf(a + a + a) !== -1) {
      return a + a + a;
    }
  }
  return '';
}

let num = "6333177739";
console.log(largestGoodInteger2(num));
