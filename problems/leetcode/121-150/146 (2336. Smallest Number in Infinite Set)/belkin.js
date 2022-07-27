/**
 * 136 ms, faster than 100.00%
 */
var SmallestInfiniteSet = function() {
  this.smallest = 1;
  this.added = [];
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
  if (this.added.length) {
    return this.added.pop();
  }
  this.smallest++;
  return this.smallest - 1;
};

/**
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
  if (num < this.smallest) {
    if (num + 1 === this.smallest) {
      this.smallest--;
    } else if (!this.added.includes(num)) {
      this.added.push(num);
      this.added.sort((a, b) => b - a);
    }
  }
};
