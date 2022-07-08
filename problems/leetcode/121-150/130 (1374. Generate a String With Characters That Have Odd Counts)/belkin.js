/**
 * 63 ms, faster than 92.35%
 */
var generateTheString = function(n) {
  let arr = Array(n).fill('a');
  if (n % 2 === 0) {
    arr.pop();
    arr.push('b');
  }
  return arr.join('');
};

let n = 3;
console.log(generateTheString(n));
