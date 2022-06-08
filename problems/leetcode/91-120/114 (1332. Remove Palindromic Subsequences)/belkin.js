/**
 * 75 ms, faster than 67.39%
 */
var removePalindromeSub = function(s) {
  let result = 1;
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      result = 2;
    }
  }
  return result;
};

let s = "abaabbbaba";
console.log(removePalindromeSub(s));
