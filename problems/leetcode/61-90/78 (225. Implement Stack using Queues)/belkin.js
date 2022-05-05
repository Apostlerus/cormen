/**
 * 70 ms, faster than 63.16%
 * Да просто задача дня попалась, заработал баллов.
 * Понимаю, что условием нужно использовать только очереди,
 * две штуки. Когда-нибудь так и реализую:)
 */
var MyStack = function() {
  this.stack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  this.stack.push(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.stack.pop();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.stack.length <= 0;
};
