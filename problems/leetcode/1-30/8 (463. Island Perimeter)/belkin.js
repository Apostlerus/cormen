/**
 * 144 ms, faster than 94.06%
 */
var islandPerimeter = function(grid) {
  let perimeter = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j]) {
        perimeter += 4;
        if (grid[i - 1] !== undefined) {
          perimeter -= grid[i - 1][j];
        }
        if (grid[i + 1] !== undefined) {
          perimeter -= grid[i + 1][j];
        }
        if (grid[i][j - 1] !== undefined) {
          perimeter -= grid[i][j - 1];
        }
        if (grid[i][j + 1] !== undefined) {
          perimeter -= grid[i][j + 1];
        }
      }
    }
  }
  return perimeter;
};

let grid = [[1, 0]];
console.log(islandPerimeter(grid));
