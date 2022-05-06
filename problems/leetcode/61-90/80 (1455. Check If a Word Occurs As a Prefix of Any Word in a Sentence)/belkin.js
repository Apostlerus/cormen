/**
 * 66 ms, faster than 72.06%
 * Продолжаем утреннюю разминку
 */
var isPrefixOfWord = function(sentence, searchWord) {
  sentence = sentence.split(' ');
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].indexOf(searchWord) === 0) {
      return i + 1;
    }
  }
  return -1;
};

let sentence = "i love eating burger", searchWord = "burg";
console.log(isPrefixOfWord(sentence, searchWord));
