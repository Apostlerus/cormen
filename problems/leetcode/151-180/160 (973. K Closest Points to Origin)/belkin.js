/**
 * 291 ms, faster than 71.08%
 */
var kClosest = function(points, k) {
  for (let i = 0; i < points.length; i++) {
    points[i].push(
      Math.sqrt(
        (points[i][0] * points[i][0]) + (points[i][1] * points[i][1])
      )
    );
  }
  points.sort((a, b) => a[2] - b[2]);
  points.splice(k);
  points = points.map(point => [point[0], point[1]]);
  return points;
};

let points = [[3,3],[5,-1],[-2,4]], k = 2;
console.log(kClosest(points, k));
