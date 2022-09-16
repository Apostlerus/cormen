/**
 * 167 ms, faster than 17.65%
 */
var minCost = function(startPos, homePos, rowCosts, colCosts) {
  let res = 0;
  let x = 0;
  if (startPos[1] < homePos[1]) {
    x = 1;
  }
  if (startPos[1] > homePos[1]) {
    x = -1;
  }
  let y = 0;
  if (startPos[0] < homePos[0]) {
    y = 1;
  }
  if (startPos[0] > homePos[0]) {
    y = -1;
  }
  if (y > 0) {
    for (let i = startPos[0] + y; i <= homePos[0]; i += y) {
      res += rowCosts[i];
    }
  }
  if (y < 0) {
    for (let i = startPos[0] + y; i >= homePos[0]; i += y) {
      res += rowCosts[i];
    }
  }
  if (x > 0) {
    for (let i = startPos[1] + x; i <= homePos[1]; i += x) {
      res += colCosts[i];
    }
  }
  if (x < 0) {
    for (let i = startPos[1] + x; i >= homePos[1]; i += x) {
      res += colCosts[i];
    }
  }
  return res;
};

let startPos = [5,5], homePos = [5,2], rowCosts = [7,1,3,3,5,3,22,10,23], colCosts = [5,5,6,2,0,16];
console.log(minCost(startPos, homePos, rowCosts, colCosts));