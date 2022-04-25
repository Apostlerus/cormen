/**
 * 81 ms, faster than 99.36%
 */
var findCenter = function(edges) {
  let intersection = edges[0].filter(number => edges[1].includes(number));
  return intersection[0];
};

let edges = [[1,2],[2,3],[4,2]];
console.log(findCenter(edges));
