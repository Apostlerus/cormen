/**
 * Схалявил, наверное..
 * 70 ms, faster than 58.10%
 *
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  this.arr = [];
  while (iterator.hasNext()) {
    this.arr.push(iterator.next());
  }
  this.pointer = 0;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return this.arr[this.pointer];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  return this.arr[this.pointer++];
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.arr[this.pointer] !== undefined;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
