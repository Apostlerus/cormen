/**
 * 81 ms, faster than 62.89%
 */
var squareIsWhite = function(coordinates) {
  return (coordinates.charCodeAt(0) + parseInt(coordinates[1])) % 2 !== 0;
};

let coordinates = "a3";
console.log(squareIsWhite(coordinates));
