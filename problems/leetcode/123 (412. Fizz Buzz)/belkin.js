/**
 * 65 ms, faster than 96.28%
 */
var fizzBuzz = function(n) {
  let i = 0;
  let result = [];
  while (n > 0) {
    let item = [
      i * 15 + 1,
      i * 15 + 2,
      'Fizz',
      i * 15 + 4,
      'Buzz',
      'Fizz',
      i * 15 + 7,
      i * 15 + 8,
      'Fizz',
      'Buzz',
      i * 15 + 11,
      'Fizz',
      i * 15 + 13,
      i * 15 + 14,
      'FizzBuzz',
    ];
    if (n < 15) {
      item.splice(n);
    }
    for (let j = 0; j < item.length; j++) {
      result.push(item[j].toString(10));
    }
    n -= 15;
    i++;
  }
  return result;
};

let n = 16;
console.log(fizzBuzz(n));
