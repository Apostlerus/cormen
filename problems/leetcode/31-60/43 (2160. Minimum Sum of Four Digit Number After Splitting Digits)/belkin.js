/**
 * 80 ms, faster than 53.55%
 * Для данной задачи с четыремя цифрами может и не оптимально,
 * но зато подойдет для любой длины.
 */
var minimumSum = function(num) {
  let nums = [[0], [0]], j = 2;
  num = num.toString().split('');
  num.sort((a, b) => a - b);
  for (let i = 0; i < num.length; i++) {
    let digit = parseInt(num[i]);
    if (!digit) {
      continue;
    }
    nums[j++ % 2].push(digit);
  }
  return parseInt(nums[0].join('')) + parseInt(nums[1].join(''));
};

let num = 9090;
console.log(minimumSum(num));
