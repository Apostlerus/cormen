/**
 * Первая медленная версия
 */
var KthLargest2 = function(k, nums) {
  this.sorted = nums;
  this.i = k;
};

/**
 * 4419 ms, faster than 15.11%
 * Мда, нужно оптимизировать, конечно...
 * @param {number} val
 * @return {number}
 */
KthLargest2.prototype.add2 = function(val) {
  this.sorted.push(val);
  this.sorted.sort((a, b) => b - a);
  return this.sorted[this.i - 1];
};

/**
 * Избавимся от лишних (сильно маленьких) элементов.
 * Предварительно добавим одно очень маленькое на случай,
 * если элементов изначально меньше k.
 */
var KthLargest = function(k, nums) {
  this.sorted = nums;
  this.sorted.push(Number.MIN_SAFE_INTEGER);
  this.sorted.sort((a, b) => b - a);
  this.sorted.splice(k);
  this.i = k;
};

/**
 * 925 ms, faster than 33.42%
 * Получше, конечно. Но все равно, видимо, можно какую-то хитрость применить
 *
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.sorted.push(val);
  let i = this.sorted.length - 1;
  while (this.sorted[i] > this.sorted[i - 1]) {
    [this.sorted[i], this.sorted[i - 1]] = [this.sorted[i - 1], this.sorted[i]];
    i--;
  }
  this.sorted.pop();
  return this.sorted[this.sorted.length - 1];
};

let kthLargest = new KthLargest(1, []);
console.log(kthLargest.add(-3));   // return 4
console.log(kthLargest.add(-2));   // return 5
console.log(kthLargest.add(-4));  // return 5
console.log(kthLargest.add(0));   // return 8
console.log(kthLargest.add(4));   // return 8
