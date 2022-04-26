/**
 * 149 ms, faster than 44.22%
 * Ну такое себе. Не понимаю, где тормозит...
 */
var countConsistentStrings = function(allowed, words) {
  allowed = allowed.split('');
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let filtered = words[i].split('');
    filtered = filtered.filter(letter => !allowed.includes(letter));
    if (filtered.length === 0) {
      count++;
    }
  }
  return count;
};

let allowed = "ab", words = ["ad","bd","aaab","baa","badab"];
console.log(countConsistentStrings(allowed, words));
