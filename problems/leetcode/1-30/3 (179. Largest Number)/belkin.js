/**
 * Мда, субботняя идея с навороченной функцией сортировки была не очень.
 * Хотел там как-то сравнивать порядок, приводить к одному порядку,
 * рассматривать разные варианты отношений пар.....
 * Короче наворотил еще не много, а тесты уже ломались,
 * понял что сильно избыточно выходит.
 *
 * Теперь так:
 * 80 ms, faster than 78.45%
 * Не знаю, может можно ли ускорить, избавившись как-то от парсинга больших интов.
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    return parseInt([b, a].join('')) - parseInt([a, b].join(''));
  });
  let res = nums.join('');
  if (parseInt(res) === 0) {
    return '0';
  }
  return nums.join('');
};

let nums = [2, 10];

console.log(largestNumber(nums));
