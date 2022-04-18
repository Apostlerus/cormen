/**
 * 63 ms, faster than 83.92%
 * Начинаем утреннюю зарядку
 */
var numberOfSteps = function(num) {
  let steps = 0;
  while (num > 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num--;
    }
    steps++;
  }
  return steps;
};

let num = 14;
console.log(numberOfSteps(num));
//6
