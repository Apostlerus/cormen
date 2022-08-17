/**
 * 87 ms, faster than 96.43%
 */

var MagicDictionary = function() {
  this.t = {};
};

MagicDictionary.prototype.buildDict = function(dictionary) {
  for (let i in dictionary) {
    let l = dictionary[i].length;
    if (this.t[l] === undefined) {
      this.t[l] = [dictionary[i]];
    } else {
      this.t[l].push(dictionary[i]);
    }
  }
};

MagicDictionary.prototype.search = function(searchWord) {
  let l = searchWord.length;
  if (this.t[l] === undefined) {
    return false;
  }
  for (let i = 0; i < this.t[l].length; i++) {
    let diffs = 0;
    for (let j = 0; j < l; j++) {
      if (searchWord[j] !== this.t[l][i][j]) {
        diffs++;
      }
      if (diffs > 1) {
        break;
      }
    }
    if (diffs === 1) {
      return true;
    }
  }
  return false;
};

let magicDictionary = new MagicDictionary();
console.log(magicDictionary.buildDict(["hello", "leetcode"]));
console.log(magicDictionary.search("hello"));
console.log(magicDictionary.search("hhllo"));
console.log(magicDictionary.search("hell"));
console.log(magicDictionary.search("leetcoded"));