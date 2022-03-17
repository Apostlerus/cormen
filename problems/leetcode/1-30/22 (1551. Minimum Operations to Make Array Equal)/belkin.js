/**
 * 77 ms, faster than 68.25%
 * Ну ничего так, заставили найти закономерность
 */
var minOperations = function(n) {
  return Math.floor(n / 2) * (Math.floor(n / 2) + 1) - (n % 2 === 0 ? n / 2 : 0);
};

let n = 4;
console.log(minOperations(n));
