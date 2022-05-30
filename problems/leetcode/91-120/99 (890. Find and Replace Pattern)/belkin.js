/**
 * 95 ms, faster than 53.54%
 */
var findAndReplacePattern = function(words, pattern) {
  let makePattern = function(word) {
    let letters = [];
    let pattern = '';
    for (let i = 0; i < word.length; i++) {
      let index = letters.indexOf(word[i]);
      if (index !== -1) {
        pattern += index.toString(10);
        continue;
      }
      letters.push(word[i]);
      pattern += (letters.length - 1).toString();
    }
    return pattern;
  };
  let goalPattern = makePattern(pattern);
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let searchPattern = makePattern(words[i]);
    if (searchPattern === goalPattern) {
      result.push(words[i])
    }
  }
  return result;
};

let words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb";
console.log(findAndReplacePattern(words, pattern));
