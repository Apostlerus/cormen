/**
 * 68 ms, faster than 79.74%
 * Ну, тут огромных тест-кейсов нет, да и сложность O(n)
 *
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let neighbors = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
  let memo = [];
  for (let i = 0; i < board.length; i++) {
    memo.push([...board[i]]);
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let liveNeighbors = 0;
      for (let n = 0; n < 8; n++) {
        let y = i + neighbors[n][0];
        let x = j + neighbors[n][1];
        if (memo[y] !== undefined && memo[y][x] !== undefined) {
          liveNeighbors += memo[y][x];
        }
      }
      if (board[i][j] === 0) {
        if (liveNeighbors === 3) {
          board[i][j] = 1;
        }
      } else {
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 0;
        }
      }
    }
  }
};

let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
gameOfLife(board);
console.log(board);
