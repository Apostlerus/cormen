/**
 * решение в лоб
 * 
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    const sorted = boxTypes.sort((a,b) => b[1] - a[1]);
    let count = 0;
    let truckFilled = 0
    for (let i = 0; i < sorted.length; i++) {
        let boxes = sorted[i][0];
        let units = sorted[i][1];
        while (boxes && truckFilled < truckSize) {
            truckFilled ++;
            count += units;
            boxes--;
        }
    }
    return count;
};

/**
 * Че-то вроде меньше итераций, а время плюс минус то же
 */

var maximumUnits = function(boxTypes, truckSize) {
    const sorted = boxTypes.sort((a,b) => b[1] - a[1]);
    let count = 0;
    let truckFilled = 0;
    for (let i = 0; i < sorted.length; i++) {
        let boxes = sorted[i][0];
        let units = sorted[i][1];
        if (truckSize - truckFilled > boxes) {
            truckFilled += boxes;
            count += boxes*units;
        } else {
            count += (truckSize - truckFilled)*units;
            break;
        }
    }
    return count;
};

/**
 * да, так элегантнее выглядит)
 *
 */
var maximumUnits = function(boxTypes, truckSize) {
    const sorted = boxTypes.sort((a,b) => b[1] - a[1]);
    let count = 0;
    for (let i = 0; i < sorted.length && truckSize > 0; i++) {
        let current = Math.min(sorted[i][0], truckSize);
        count += current * sorted[i][1]
        truckSize -= current
    }
    return count;
};

