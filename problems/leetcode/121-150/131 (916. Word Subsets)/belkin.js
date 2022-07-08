/**
 * 1232 ms, faster than 16.28%
 */
var wordSubsets = function(words1, words2) {
  let res = [];
  let needed = {};
  for (let i = 0; i < words2.length; i++) {
    let wNeeded = {};
    for (let j = 0; j < words2[i].length; j++) {
      if (wNeeded[words2[i][j]] === undefined) {
        wNeeded[words2[i][j]] = 1;
      } else {
        wNeeded[words2[i][j]]++;
      }
    }
    for (let letter in wNeeded) {
      if (needed[letter] === undefined) {
        needed[letter] = wNeeded[letter];
      } else {
        needed[letter] = Math.max(needed[letter], wNeeded[letter]);
      }
    }
  }
  for (let i = 0; i < words1.length; i++) {
    let table = {};
    for (let j = 0; j < words1[i].length; j++) {
      if (table[words1[i][j]] === undefined) {
        table[words1[i][j]] = 1;
      } else {
        table[words1[i][j]]++;
      }
    }
    let ok = true;
    for (let letter in needed) {
      if (table[letter] === undefined || table[letter] < needed[letter]) {
        ok = false;
        if (!ok) {
          break;
        }
      }
    }
    if (!ok) {
      continue;
    }
    res.push(words1[i]);
  }
  return res;
};

let words1 = ["amazon","apple","facebook","google","leetcode"], words2 = ["e","o"];
console.log(wordSubsets(words1, words2));
//["facebook","google","leetcode"]
