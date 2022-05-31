/**
 * Первое решение, в лоб, не прошло по лимиту времени.
 * По сути перебираем все числа и проверяем их вхождение в строку
 */
var hasAllCodes2 = function(s, k) {
  k = Math.min(k, s.length);
  let max = Math.pow(2, k);
  let leading = new Array(k).fill('0').join('');
  for (let i = 0; i < max; i++) {
    let binary = i.toString(2);
    binary = leading.substr(binary.length) + binary;
    if (s.indexOf(binary) === -1) {
      return false;
    }
  }
  return true;
};

/**
 * 421 ms, faster than 33.33%
 * Это решение прошло, но как-то медленно все равно.
 */
var hasAllCodes3 = function(s, k) {
  let binaries = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    binaries.add(s.slice(i, k + i));
  }
  return binaries.size === Math.pow(2, k);
};

/**
 * 858 ms, faster than 16.67%
 * Так медленнее всего :) Можно на этом остановиться :)
 */
var hasAllCodes = function(s, k) {
  let binaries = {};
  for (let i = 0; i <= s.length - k; i++) {
    if (binaries[s.slice(i, k + i)] === undefined) {
      binaries[s.slice(i, k + i)] = 1;
    }
  }
  return Object.keys(binaries).length === Math.pow(2, k);
};

let s = "00110110", k = 2;
console.log(hasAllCodes(s, k));
