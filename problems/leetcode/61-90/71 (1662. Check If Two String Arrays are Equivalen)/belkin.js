/**
 * 52 ms, faster than 98.89%
 * Размялись немного
 */
var arrayStringsAreEqual = function(word1, word2) {
  word1 = word1.join('');
  word2 = word2.join('');
  return word1 === word2;
};

let word1 = ["ab", "c"], word2 = ["a", "bc"];
console.log(arrayStringsAreEqual(word1, word2));
