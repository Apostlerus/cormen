/**
 * 64 ms, faster than 96.03%
 */
var selfDividingNumbers = function(left, right) {
  let res = [];
  for (let i = left; i <= right; i++) {
    let digits = i.toString(10).split('');
    let ok = true;
    for (let j = 0; j < digits.length; j++) {
      let d = parseInt(digits[j], 10);
      if (d === 0 || i % d > 0) {
        ok = false;
      }
      if (!ok) {
        break;
      }
    }
    if (!ok) {
      continue;
    }
    res.push(i);
  }
  return res;
};

let left = 47, right = 85;
console.log(selfDividingNumbers(left, right));
// [48,55,66,77]
