/**
 * 141 ms, faster than 63.03%
 */
var countBalls = function(lowLimit, highLimit) {
  let table = {};
  let max = 0;
  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0;
    let a = i.toString(10);
    for (let j = 0; j < a.length; j++) {
      sum += parseInt(a[j]);
    }
    if (table[sum] === undefined) {
      table[sum] = 1;
    } else {
      table[sum]++;
    }
    if (table[sum] > max) {
      max = table[sum];
    }
  }
  return max;
};

let lowLimit = 1, highLimit = 10;
console.log(countBalls(lowLimit, highLimit));
