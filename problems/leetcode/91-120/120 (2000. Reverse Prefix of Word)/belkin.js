/**
 * 59 ms, faster than 95.49%
 */
var reversePrefix = function(word, ch) {
  const index = word.indexOf(ch);
  if (index < 1) {
    return word;
  }
  word = word.split('');
  let prefix = word.splice(0, index + 1);
  prefix.reverse();
  return prefix.join('') + word.join('');
};

let word = "abcdefd", ch = "d";
console.log(reversePrefix(word, ch));
