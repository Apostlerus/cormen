/**
 * 91 ms, faster than 59.35%
 */
var countGoodRectangles = function(rectangles) {
  let biggest = 0;
  let count = 0;
  for (let i = 0; i < rectangles.length; i++) {
    let side = Math.min(rectangles[i][0], rectangles[i][1]);
    if (side === biggest) {
      count++;
    } else if (side > biggest) {
      biggest = side;
      count = 1;
    }
  }
  return count;
};

let rectangles = [[5,8],[3,9],[5,12],[16,5]];
console.log(countGoodRectangles(rectangles));
