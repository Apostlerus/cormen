/**
 * 96 ms, faster than 94.68%
 * Идём по рядам. С нулями - пропускаем, иначе считаем произведение с предыдущим числом.
 */
var numberOfBeams = function(bank) {
  let res = 0, last = 0;
  for (let i = 0; i < bank.length; i++) {
    let count = (bank[i].match(/1/g) || []).length;
    if (!count) {
      continue;
    }
    if (!last) {
      last = count;
    } else {
      res += last * count;
      last = count;
    }
  }
  return res;
};

let bank = ["111", '111'];
console.log(numberOfBeams(bank));
