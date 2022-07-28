/**
 * 58 ms, faster than 97.73%
 */
var complexNumberMultiply = function(num1, num2) {
  num1 = num1.split('+');
  num1[0] = parseInt(num1[0], 10);
  num1[1] = parseInt(num1[1].slice(0, -1), 10);
  num2 = num2.split('+');
  num2[0] = parseInt(num2[0], 10);
  num2[1] = parseInt(num2[1].slice(0, -1), 10);
  let a = (num1[0] * num2[0]) + ((num1[1] * num2[1]) * -1);
  let b = (num1[0] * num2[1]) + (num1[1] * num2[0]);
  return `${a}+${b}i`;
};
