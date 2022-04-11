/**
 * 96 ms, faster than 77.92%
 */
var shiftGrid = function(grid, k) {
  let steps = k % (grid.length * grid[0].length);
  let flat = [];
  for (let i = 0; i < grid.length; i++) {
    flat.push(...grid[i]);
  }
  let start = flat.splice(flat.length - steps);
  flat = start.concat(flat);
  let res = [];
  while (flat.length) {
    res.push(flat.splice(0, grid[0].length));
  }
  return res;
};

let grid = [[1,2,3],[4,5,6],[7,8,9]], k = 2;
console.log(shiftGrid(grid, k));
