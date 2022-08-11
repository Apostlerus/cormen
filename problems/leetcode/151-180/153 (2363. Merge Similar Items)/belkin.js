/**
 * 103 ms, faster than 100.00%
 */
var mergeSimilarItems = function(items1, items2) {
  let table = {};
  items1.map(item => {
    table[item[0]] = item[1];
  });
  items2.map(item => {
    if (table[item[0]] === undefined) {
      table[item[0]] = item[1];
    } else {
      table[item[0]] += item[1];
    }
  });
  let res = [];
  for (let i in table) {
    res.push([parseInt(i), table[i]]);
  }
  res.sort((a, b) => a[0] - b[0]);
  return res;
};

let items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]];
console.log(mergeSimilarItems(items1, items2));
// [[1,6],[3,9],[4,5]]
