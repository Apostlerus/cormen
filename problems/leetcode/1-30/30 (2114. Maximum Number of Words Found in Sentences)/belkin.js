/**
 * 90 ms, faster than 53.13% ...
 */
var mostWordsFound = function(sentences) {
  let max = 0;
  for (let i = 0; i < sentences.length; i++) {
    let sum = sentences[i].split(' ').length;
    max = Math.max(max, sum);
  }
  return max;
};

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));
