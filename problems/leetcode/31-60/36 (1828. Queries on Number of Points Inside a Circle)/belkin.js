/**
 * 153 ms, faster than 54.55%
 */
var countPoints = function(points, queries) {
  let res = [];
  queries.map(query => {
    let sum = 0;
    points.map(point => {
      let x = Math.abs(query[0] - point[0]),
          y = Math.abs(query[1] - point[1]);
      if ((x * x) + ( y* y) <= query[2] * query[2]) {
        sum++;
      }
    });
    res.push(sum);
  });
  return res;
};

let points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]];
console.log(countPoints(points, queries)); //[3,2,2]
