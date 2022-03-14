/**
 * 225 ms, faster than 15.68%
 * Отдохнул немного, однострочники расслабляют так)
 * Понятное дело, можно было вручную одним проходом найти максимальную цифру.
 */
var minPartitions = function(n) {
  return n.split('').sort().pop();
};

let n = "82734";
console.log(minPartitions(n));
