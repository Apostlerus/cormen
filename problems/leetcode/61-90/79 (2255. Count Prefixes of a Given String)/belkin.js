/**
 * 86 ms, faster than 52.31%
 * Решение далеко не оптимальное. Можно повозиться с посимвольным сравнением.
 */
var countPrefixes = function(words, s) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (s.indexOf(words[i]) === 0) {
      count++;
    }
  }
  return count;
};

let words = ["a","b","c","ab","bc","abc"], s = "abc";
console.log(countPrefixes(words, s));
