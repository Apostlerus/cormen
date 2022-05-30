/**
 * 111 ms, faster than 63.06%
 */
var firstPalindrome = function(words) {
  let result = '';
  for (let j = 0; j < words.length; j++) {
    if (words[j].length === 1) {
      return words[j];
    }
    let mid = Math.floor(words[j].length / 2);
    for (let i = 0; i < mid; i++) {
      if (words[j][i] !== words[j][words[j].length - 1 - i]) {
        break;
      }
      if (i === (mid - 1)) {
        return words[j];
      }
    }
  }
  return result;
};

let words = ["abc","car","ada","racecar","cool"];
console.log(firstPalindrome(words));
