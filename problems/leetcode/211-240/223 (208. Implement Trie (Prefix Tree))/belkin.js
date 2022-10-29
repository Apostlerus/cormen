/**
 * 407 ms, faster than 15.04%
 */
var Trie = function() {
  this.s = '.';
  this.t = {};
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  this.s += `.${word}.`;
  this.t[word] = this.t[word] + 1 || 1;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  return this.t[word] !== undefined;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let str = `\\.${prefix}`;
  let regexp = new RegExp(str);
  return this.s.search(regexp) !== -1;
};
