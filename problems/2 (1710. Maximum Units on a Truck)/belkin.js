/**
 * 109 ms	41.4 MB
 * Мда, медленно. Надо подумать еще
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let units = 0;
  for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
    let boxesToPut = Math.min(truckSize, boxTypes[i][0]);
    truckSize -= boxesToPut;
    units += boxTypes[i][1] * boxesToPut;
  }
  return units;
};

let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10;

console.log(maximumUnits(boxTypes, truckSize));
