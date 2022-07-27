/**
 * 80 ms, faster than 67.90%
 */
var mergeAlternately = function(word1, word2) {
  word1 = word1.split('').reverse();
  word2 = word2.split('').reverse();
  let res = [];
  while (word1.length && word2.length) {
    res.push(word1.pop());
    res.push(word2.pop());
  }
  word1 = word1.reverse().join('');
  word2 = word2.reverse().join('');
  res = `${res.join('')}${word1}${word2}`;
  return res;

};

let word1 = "ab", word2 = "pqrs";
console.log(mergeAlternately(word1, word2));
