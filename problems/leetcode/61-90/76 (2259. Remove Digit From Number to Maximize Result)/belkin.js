/**
 * 49 ms, faster than 99.52%
 * Ай какие вариативные кейсы в задаче, хоть и не сложная на первый взгляд.
 */
var removeDigit = function(number, digit) {
  number = number.split('');
  let index = 0;
  for (let i = 0; i < number.length; i++) {
    let next = number[i + 1] !== undefined ? parseInt(number[i + 1]) : 10;
    if (number[i] === digit) {
      index = i;
      if (parseInt(number[i]) < next) {
        break;
      }
    }
  }
  number[index] = '';
  return number.join('');
};

let number = "2464", digit = "6";
console.log(removeDigit(number, digit));
