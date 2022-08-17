/**
 * 83 ms, faster than 59.69%
 */

var MapSum = function() {
  this.t = {};
};

/**
 * @param {string} key
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
  this.t[key] = val;
};

/**
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
  let sum = 0;
  for (let k in this.t) {
    if (k.indexOf(prefix) === 0) {
      sum += this.t[k];
    }
  }
  return sum;
};
