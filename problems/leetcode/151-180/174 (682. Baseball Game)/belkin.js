/**
 * 84 ms, faster than 68.03%
 */
var calPoints = function(ops) {
  let arr = [], p = -1, sum = 0;
  for (let i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case 'C':
        sum -= arr.pop();
        p--;
        break;
      case 'D':
        let a = arr[p++] * 2;
        sum += a;
        arr.push(a);
        break;
      case '+':
        let b = arr[p] + arr[p - 1];
        sum += b;
        arr.push(b);
        p++;
        break;
      default:
        sum += parseInt(ops[i]);
        arr.push(parseInt(ops[i]));
        p++;
    }
  }
  return sum;
};

let ops = ["1","C"];
console.log(calPoints(ops));
