/**
 * 1639 ms, faster than 7.41%
 * Хм хм. Тут точно есть, над чем подумать.
 */
var xorQueries = function(arr, queries) {
  let result = [];
  queries.map(query => {
    let xor = arr[query[0]];
    let i = query[0] + 1;
    while (i <= query[1]) {
      xor = xor ^ arr[i++];
    }
    result.push(xor);
  });
  return result;
};

let arr = [4,8,2,10], queries = [[2,3],[1,3],[0,0],[0,3]];
console.log(xorQueries(arr, queries));
//[8,0,4,4]
