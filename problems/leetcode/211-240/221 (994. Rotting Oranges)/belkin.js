/**
 * 96 ms, faster than 82.19%
 */
var orangesRotting = function(grid) {
  let found = false;
  let s = new Set();
  let fc = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        found = true;
        s.add([i, j].join('|'));
      }
      if (grid[i][j] === 1) {
        fc++;
      }
    }
  }
  if (fc === 0) {
    return 0;
  }
  let c = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let res = 0;
  while (found) {
    let arr = [...s];
    s = new Set();
    found = false;
    for (let a = 0; a < arr.length; a++) {
      [i, j] = arr[a].split('|').map(num => parseInt(num));
      for (let ci in c) {
        if (grid[i + c[ci][0]] !==undefined && (grid[i + c[ci][0]][j + c[ci][1]] === 1)) {
          grid[i + c[ci][0]][j + c[ci][1]] = 2;
          s.add([i + c[ci][0], j + c[ci][1]].join('|'));
          fc--;
          found = true;
        }
      }
    }
    res++;
    if (fc === 0) {
      break;
    }
  }
  if (fc > 0) {
    return -1;
  }
  return res;
};

let grid = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(grid));
