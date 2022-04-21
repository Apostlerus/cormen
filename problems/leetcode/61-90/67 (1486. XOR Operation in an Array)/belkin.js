/**
 * 56 ms, faster than 97.04%
 * Скорость, молодость, энергия! :)
 */
var xorOperation = function(n, start) {
  let last = start;
  for (let i = 1; i < n; i++) {
    last = last ^ (start + (i * 2));
  }
  return last;
};

let n = 5, start = 0;
console.log(xorOperation(n, start));
//8
