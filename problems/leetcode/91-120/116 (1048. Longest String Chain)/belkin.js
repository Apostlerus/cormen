/**
 * 187 ms, faster than 57.31%
 */
var longestStrChain = function(words) {
  let chains = Array(words.length).fill(1);
  let maxChain = 1;
  words.sort((a, b) => (a.length - b.length));
  const canChain = function(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    let hasCommon = true;
    do {
      if (s1[0] === s2[0]) {
        s1.shift();
        s2.shift();
      } else {
        if (s1[s1.length - 1] === s2[s2.length - 1]) {
          s1.pop();
          s2.pop();
        } else {
          hasCommon = false;
        }
      }
    } while (hasCommon && s1.length);
    return s2.length === 1;
  };
  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i + 1; j < words.length && (words[j].length - words[i].length) < 2; j++) {
      if (words[j].length === words[i].length) {
        continue;
      }
      if (canChain(words[i], words[j])) {
        chains[j] = Math.max(chains[j], chains[i] + 1);
        maxChain = Math.max(maxChain, chains[j]);
      }
    }
  }
  return maxChain;
};

let words = ["xbc","pcxbcf","xb","cxbc","pcxbc"];
console.log(longestStrChain(words));
