/**
 * 109 ms	41.4 MB
 * Мда, медленно. Надо подумать еще
 */
var maximumUnits2 = function(boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1]);
  let units = 0;
  for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
    let boxesToPut = Math.min(truckSize, boxTypes[i][0]);
    truckSize -= boxesToPut;
    units += boxTypes[i][1] * boxesToPut;
  }
  return units;
};

/**
 * Вместо сортировки по величине используем величину как индекс массива.
 * Без сортировки время линейное, ускорение есть, но небольшое.
 * 88 ms	41.7 MB это лучшее, среднее в районе 130 всё равно.
 * Количество наборов изначально небольшое, поэтому линейный проход вместо сортировки
 * не сильно влияет.
 */
var maximumUnits = function(boxTypes, truckSize) {
  let amounts = [];
  for (let i = 0; i < boxTypes.length; i++) {
    if (!amounts[boxTypes[i][1]]) {
      amounts[boxTypes[i][1]] = boxTypes[i][0];
    } else {
      amounts[boxTypes[i][1]] += boxTypes[i][0];
    }
  }
  let units = 0;
  for (let i = amounts.length - 1; i >= 0 && truckSize > 0; i--) {
    if (!amounts[i]) {
      continue;
    }
    let boxesToPut = Math.min(truckSize, amounts[i]);
    truckSize -= boxesToPut;
    units += i * boxesToPut;
  }
  return units;
};

let boxTypes = [[5,10],[2,5],[4,7],[3,9]], truckSize = 10;

console.log(maximumUnits(boxTypes, truckSize));
