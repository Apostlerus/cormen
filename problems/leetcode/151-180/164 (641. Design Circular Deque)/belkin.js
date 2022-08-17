/**
 * 129 ms, faster than 78.87%
 */

var MyCircularDeque = function(k) {
  this.q = [];
  this.k = k;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertFront = function(value) {
  if (this.q.length === this.k) {
    return false;
  }
  this.q.unshift(value);
  return true;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularDeque.prototype.insertLast = function(value) {
  if (this.q.length === this.k) {
    return false;
  }
  this.q.push(value);
  return true;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteFront = function() {
  return this.q.shift() !== undefined;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.deleteLast = function() {
  return this.q.pop() !== undefined;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getFront = function() {
  return this.q.length ? this.q[0] : -1;
};

/**
 * @return {number}
 */
MyCircularDeque.prototype.getRear = function() {
  return this.q.length ? this.q[this.q.length - 1] : -1;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isEmpty = function() {
  return this.q.length === 0;
};

/**
 * @return {boolean}
 */
MyCircularDeque.prototype.isFull = function() {
  return this.q.length === this.k;
};