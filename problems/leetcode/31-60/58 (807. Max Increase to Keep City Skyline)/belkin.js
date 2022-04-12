/**
 * 68 ms, faster than 88.24%
 */
var maxIncreaseKeepingSkyline = function(grid) {
  let maxY = new Array(grid[0].length).fill(0);
  let maxX = new Array(grid.length).fill(0);
  let res = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      maxY[j] = Math.max(maxY[j], grid[i][j]);
      maxX[i] = Math.max(maxX[i], grid[i][j]);
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      res += Math.min(maxY[j], maxX[i]) - grid[i][j];
    }
  }
  return res;
};

let grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]];
console.log(maxIncreaseKeepingSkyline(grid));
