/**
 * 65 ms, faster than 96.48%
 */
var digitCount = function(num) {
  let table = {};
  for (let i = 0; i < num.length; i++) {
    if (table[num[i]] === undefined) {
      table[num[i]] = 1;
    } else {
      table[num[i]]++;
    }
  }
  for (let i = 0; i < num.length; i++) {
    let a;
    if (table[i] === undefined) {
      a = 0;
    } else {
      a = table[i];
    }
    if (parseInt(num[i]) !== a) {
      return false;
    }
  }
  return true;
};

let num = "030";
console.log(digitCount(num));
