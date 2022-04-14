/**
 * 69 ms, faster than 71.96%
 */
var getRow = function(rowIndex) {
  let lastRow = [1];
  for (let i = 2; i <= rowIndex + 1; i++) {
    let row = [1];
    for (let j = 1; j < lastRow.length; j++) {
      row.push(lastRow[j] + lastRow[j - 1]);
    }
    row.push(1);
    lastRow = [...row];
  }
  return lastRow;
};

let rowIndex = 3;
console.log(getRow(rowIndex));
//[1,3,3,1]
