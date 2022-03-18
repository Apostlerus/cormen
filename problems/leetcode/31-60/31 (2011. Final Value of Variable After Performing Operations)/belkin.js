/**
 * 83 ms, faster than 62.73%
 */
var finalValueAfterOperations = function(operations) {
  let x = 0;
  for (let i = 0; i < operations.length; i++) {
    x += operations[i].includes('+') ? 1 : -1;
  }
  return x;
};

let operations = ["--X","X++","X++"];
console.log(finalValueAfterOperations(operations));
