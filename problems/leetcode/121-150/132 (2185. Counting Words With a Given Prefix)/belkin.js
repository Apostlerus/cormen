/**
 * 65 ms, faster than 91.08%
 */
var prefixCount = function(words, pref) {
  let res = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < pref.length) {
      continue;
    }
    if (words[i].substring(0, pref.length) === pref) {
      res++;
    }
  }
  return res;
};

let words = ["pay","attention","practice","attend"], pref = "at";
console.log(prefixCount(words, pref));
