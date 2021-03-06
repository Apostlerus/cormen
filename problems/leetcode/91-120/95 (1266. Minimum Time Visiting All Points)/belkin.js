/**
 * 76 ms, faster than 69.47%
 */
var minTimeToVisitAllPoints = function(points) {
  let steps = 0;
  for (let i = 0; i < points.length - 1; i++) {
    let x = Math.abs(points[i][0] - points[i + 1][0]);
    let y = Math.abs(points[i][1] - points[i + 1][1]);
    steps += Math.max(x, y);
  }
  return steps;
};

let points = [[1,1],[3,4],[-1,0]];
console.log(minTimeToVisitAllPoints(points));
