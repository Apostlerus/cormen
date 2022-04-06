/**
 * 56 ms, faster than 97.17%
 */
var subtractProductAndSum = function(n) {
  let product = 1, sum = 0;
  n.toString().split('').map(digit => {
    product *= parseInt(digit);
    sum += parseInt(digit);
  });
  return product - sum;
};

let n = 4421;
console.log(subtractProductAndSum(n));
