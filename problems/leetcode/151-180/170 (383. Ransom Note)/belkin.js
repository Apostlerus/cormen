/**
 * 103 ms, faster than 82.27%
 */
var canConstruct = function(ransomNote, magazine) {
  let t = {};
  for (let i = 0; i < magazine.length; i++) {
    if (t[magazine[i]] === undefined) {
      t[magazine[i]] = 1;
    } else {
      t[magazine[i]]++;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    let l = ransomNote[i];
    if (t[l] === undefined || t[l] === 0) {
      return false;
    }
    t[l]--;
  }
  return true;
};

let ransomNote = "aa", magazine = "a";
console.log(canConstruct(ransomNote, magazine));
