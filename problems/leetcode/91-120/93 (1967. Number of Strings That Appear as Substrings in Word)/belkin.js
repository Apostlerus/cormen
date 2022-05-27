/**
 * 80 ms, faster than 47.41%
 */
var numOfStrings = function(patterns, word) {
  let count = 0;
  patterns.forEach(subStr => {
    if (word.indexOf(subStr) !== -1) {
      count++;
    }
  });
  return count;
};

let patterns = ["a","abc","bc","d"], word = "abc";
console.log(numOfStrings(patterns, word));
