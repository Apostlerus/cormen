/**
 * 100 ms, faster than 75.91%
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') {
    return '0';
  }
  let rows = [];
  let rl = num1.length + num2.length;
  for (let j = num2.length - 1; j >= 0; j--) {
    let row = Array(num2.length - 1 - j).fill(0);
    let d = 0;
    for (let i = num1.length - 1; i >= 0; i--) {
      let n = (parseInt(num1[i]) * parseInt(num2[j])) + d;
      row.push(n % 10);
      d = Math.floor(n / 10);
    }
    if (d) {
      row.push(d);
    }
    while (row.length < rl) {
      row.push(0);
    }
    rows.push(row);
  }
  let sum = 0;
  let res = [];
  for (let i = 0; i < rl; i++) {
    for (let j = 0; j < rows.length; j++) {
      sum += rows[j][i];
    }
    res.push(sum % 10);
    sum = Math.floor(sum / 10);
  }
  if (sum) {
    res.push(sum);
  }
  if (res[res.length - 1] === 0) {
    res.pop();
  }
  res.reverse();
  return res.join('');
};

let num1 = "2", num2 = "3";
console.log(multiply(num1, num2));
