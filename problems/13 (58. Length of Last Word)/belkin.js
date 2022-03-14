/**
 * 67 ms, faster than 78.74%
 * Чёт я не понял, куда уж быстрее
 */
var lengthOfLastWord = function(s) {
  let length = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === ' ') {
      if (length === 0) {
        continue;
      } else {
        break;
      }
    }
    length++;
  }
  return length;
};

let s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));
