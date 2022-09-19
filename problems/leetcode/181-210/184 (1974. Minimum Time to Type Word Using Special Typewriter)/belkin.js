/**
 * 74 ms, faster than 85.86%
 */
var minTimeToType = function(word) {
  let res = word.length;
  word = 'a' + word;
  for (let i = 1; i < word.length; i++) {
    let diff = Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1));
    res += Math.min(diff, 26 - diff);
  }
  return res;
};

let word = "zjpc";
console.log(minTimeToType(word));
//34