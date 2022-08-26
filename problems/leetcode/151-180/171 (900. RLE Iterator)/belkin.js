/**
 * 52 ms, faster than 99.31%
 */

var RLEIterator = function(encoding) {
  this.e = encoding;
  this.pair = 0;
};

RLEIterator.prototype.next = function(n) {
  for (let i = this.pair; i < this.e.length / 2;) {
    this.e[i * 2] -= n;
    if (this.e[i * 2] >= 0) {
      return this.e[(i * 2) + 1];
    }
    n = this.e[i * 2] * -1;
    i++;
    this.pair = i;
  }
  return -1;
};

let rLEIterator = new RLEIterator([3, 8, 0, 9, 2, 5]);
console.log(rLEIterator.next(2));
console.log(rLEIterator.next(1));
console.log(rLEIterator.next(1));
console.log(rLEIterator.next(2));