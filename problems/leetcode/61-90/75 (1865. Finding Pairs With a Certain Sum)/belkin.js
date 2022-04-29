/**
 * 666 ms, faster than 34.21%
 * Зловещая скорость! >:-)
 *
 * Ну конечно есть что оптимизировать.
 * Искать бинарно, исключить высокие значения сразу, и т.д.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 */
var FindSumPairs = function(nums1, nums2) {
  this.nums1 = nums1;
  this.nums2 = nums2;
  this.table = {};
  for (let i = 0; i < nums2.length; i++) {
    if (this.table.hasOwnProperty(nums2[i])) {
      this.table[nums2[i]]++;
    } else {
      this.table[nums2[i]] = 1;
    }
  }
};

/**
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function(index, val) {
  this.table[this.nums2[index]]--;
  this.nums2[index] += val;
  if (this.table.hasOwnProperty(this.nums2[index])) {
    this.table[this.nums2[index]]++
  } else {
    this.table[this.nums2[index]] = 1;
  }
};

/**
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function(tot) {
  let count = 0;
  for (let i = 0; i < this.nums1.length; i++) {
    if (this.table.hasOwnProperty(tot - this.nums1[i])) {
      count += this.table[tot - this.nums1[i]];
    }
  }
  return count;
};
