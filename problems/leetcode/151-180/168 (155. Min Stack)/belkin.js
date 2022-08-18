/**
 * 97 ms, faster than 98.98%
 */

var MinStack = function() {
  this.s = [];
  this.min = Number.MAX_SAFE_INTEGER;
  this.mins = [];
  this.minsCount = {};
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.s.push(val);
  if (this.minsCount[val] !== undefined) {
    this.minsCount[val]++;
  }
  if (val < this.min) {
    this.min = val;
    this.mins.push(val);
    this.minsCount[val] = 1;
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  let val = this.s.pop();
  if (val === this.min) {
    this.minsCount[val]--;
    if (this.minsCount[val] === 0) {
      this.mins.pop();
      if (this.mins.length) {
        this.min = this.mins[this.mins.length - 1];
      } else {
        this.min = Number.MAX_SAFE_INTEGER;
      }
      delete this.minsCount[val];
    }
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.s[this.s.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.min;
};

let minStack = new MinStack();
console.log(minStack.push(2147483646));
console.log(minStack.push(2147483646));
console.log(minStack.push(2147483647));
console.log(minStack.top());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.getMin());
console.log(minStack.pop());
console.log(minStack.push(2147483647));
console.log(minStack.top());
console.log(minStack.getMin());

//["MinStack","push","push","push","top","pop","getMin","pop","getMin","pop","push","top","getMin","push","top","getMin","pop","getMin"]
//  [[],[2147483646],[2147483646],[2147483647],[],[],[],[],[],[],[2147483647],[],[],[-2147483648],[],[],[],[]]