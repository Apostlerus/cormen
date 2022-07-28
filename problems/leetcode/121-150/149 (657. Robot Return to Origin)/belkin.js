/**
 * 80 ms, faster than 85.42%
 */
var judgeCircle = function(moves) {
  let counts = {U: 0, D: 0, L: 0, R: 0};
  for (let i = 0; i < moves.length; i++) {
    counts[moves[i]]++;
  }
  return (counts.U === counts.D) && (counts.L === counts.R);
};

let moves = "UD";
console.log(judgeCircle(moves));
