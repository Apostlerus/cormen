/**
 * 83 ms, faster than 90.96%
 */
var topKFrequent = function(words, k) {
  let table = {};
  for (let i = 0; i < words.length; i++) {
    if (table[words[i]] === undefined) {
      table[words[i]] = [words[i], 1];
    } else {
      table[words[i]][1]++;
    }
  }
  table = Object.values(table);
  table.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });
  table.splice(k);
  table = table.map(row => row[0]);
  return table;
};

let words = ["i","love","leetcode","i","love","coding"], k = 2;
console.log(topKFrequent(words, k));
