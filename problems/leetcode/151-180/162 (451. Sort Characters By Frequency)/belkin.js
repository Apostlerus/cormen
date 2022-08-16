/**
 * 132 ms, faster than 48.96%
 */
var frequencySort = function(s) {
  let table = {};
  for (let i = 0; i < s.length; i++) {
    if (table[s[i]] === undefined) {
      table[s[i]] = [s[i], 1];
    } else {
      table[s[i]][1]++;
    }
  }
  table = Object.values(table);
  table.sort((a, b) => b[1] - a[1]);
  let res = [];
  table.map(letter => {
    for (let i = 0; i < letter[1]; i++) {
      res.push(letter[0]);
    }
  })
  return res.join('');
};

let s = "Aabb";
console.log(frequencySort(s));
