/**
 * 83 ms, faster than 65.31%
 */
var halvesAreAlike = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const mid = s.length / 2;
  let halvesVowelsCounts = [0, 0];
  for (let i = 0; i < s.length; i++) {
    let half = i < mid ? 0 : 1;
    if (vowels.indexOf(s[i]) !== -1) {
      halvesVowelsCounts[half]++;
    }
  }
  return halvesVowelsCounts[0] === halvesVowelsCounts[1];
};

let s = "book";
console.log(halvesAreAlike(s));
