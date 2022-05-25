/**
 * 74 ms, faster than 61.90%
 */
var minFlips = function(a, b, c) {
  let bitsCount, result = 0;
  a = a.toString(2);
  b = b.toString(2);
  c = c.toString(2);
  bitsCount = Math.max(a.length, b.length, c.length);
  while (a.length < bitsCount) {
    a = `0${a}`;
  }
  while (b.length < bitsCount) {
    b = `0${b}`;
  }
  while (c.length < bitsCount) {
    c = `0${c}`;
  }
  for (let i = 0; i < a.length; i++) {
    if (parseInt(c[i]) === 0) {
      result += parseInt(a[i]) + parseInt(b[i]);
      continue;
    }
    if (!(parseInt(a[i]) || parseInt(b[i]))) {
      result++;
    }
  }
  return result;
};

let a = 8, b = 3, c = 5;
console.log(minFlips(a, b, c));
