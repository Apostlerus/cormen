/**
 * 84 ms, faster than 64.81%
 */
var queensAttacktheKing = function(queens, king) {
  let paths = [[-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1], [-1, -1]];
  let found = {};
  let queensTable = [];
  queens.map(queen => {queensTable.push(queen.join(','))});
  for (let i = 1; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      if (found.hasOwnProperty(j)) {
        continue;
      }
      let coords = [king[0] + paths[j][0] * i, king[1] + paths[j][1] * i];
      if (coords[0] < 0 || coords[0] > 7 || coords[1] < 0 || coords[1] > 7) {
        continue;
      }
      coords = coords.join(',');
      if (queensTable.includes(coords)) {
        found[j] = coords;
      }
    }
  }
  return Object.keys(found).map(queenIndex => found[queenIndex].split(','));
};

let queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4];
console.log(queensAttacktheKing(queens, king));
