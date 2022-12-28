import FileSystem from "../../../helpers/fileSystem.js";
import {RADIX} from "../../../helpers/constants.js";

/**
 * The solution
 * @param {number} n total rounds count
 * @param {number[]} rounds round results
 * @returns {number} max draw streak
 */
function solve(n, rounds) {
    // first, go from the left to right
    let maxDrawStreak = 0;
    if (n === 1 || n === 0) {
        return maxDrawStreak;
    }
    // let currentSum = 0;
    let zeroCount = 0;
    let oneCount = 0;
    let zeroArray = [];
    let oneArray = [];
    let resultArray = [];
    let deltaOne = 0;
    let deltaZero  = 0;
    let left = 0;
    let right = n - 1;
    for (let i = 0; i < n; i++) {
        if (rounds[i] === 0) {
            zeroCount++;
        }
        if (rounds[i] === 1) {
            oneCount++;
        }
        zeroArray.push(zeroCount);
        oneArray.push(oneCount);
    }

    for (let j = 0; j < n; j++) {
        resultArray.push(zeroArray[j] - oneArray[j]);
    }

    // oneArray.reverse();
    console.log('rounds', rounds);
    console.log('zeroArray', zeroArray);
    console.log('oneArray', oneArray);
    console.log('resultArray', resultArray);
    console.log('maxDrawStreak', maxDrawStreak);

    while (left < right) {
        if ((zeroArray[left] - deltaZero) === (oneArray[right] - deltaOne)) {
            console.log(`RESULT: left=${left}, right=${right}, leftEl=${zeroArray[left]}, rightEl=${oneArray[right]}, deltaOne=${deltaOne}, deltaZero=${deltaZero}`);
            return right - left + 1;
        }
        if (zeroArray[left] - deltaZero < oneArray[right] - deltaOne) {
            deltaZero = zeroArray[left];
            deltaOne = oneArray[left];
            left ++;
            console.log(`LEFT: left=${left}, right=${right}, leftEl=${zeroArray[left]}, rightEl=${oneArray[right]}, deltaOne=${deltaOne}, deltaZero=${deltaZero}`);
        } else {
            console.log(`RIGHT: left=${left}, right=${right}, leftEl=${zeroArray[left]}, rightEl=${oneArray[right]}, deltaOne=${deltaOne}, deltaZero=${deltaZero}`);
            right --;
        }
        // for (let j = n - 1; j > i; j --) {
        //     if ((i === 0 && resultArray[j] === 0) || (i !== 0 && resultArray[i] === resultArray[j])) {
        //         console.log(`i=${i}, j=${j}, left=${resultArray[i]}, right=${resultArray[j]}`);
        //         let currentMaxDrawStreak = j - i + 1;
        //         if (currentMaxDrawStreak > maxDrawStreak) {
        //             maxDrawStreak = currentMaxDrawStreak;
        //         }
        //     }
        // }

    }


    return maxDrawStreak;
}

/**
 * Main function for getting data call solution and write data to output
 */
export const main = () => {
    const fileSystem = new FileSystem()
    fileSystem.readData('./sprint4/inputs/G.txt'); // for local filesystem (different project structure)
    // fileSystem.readData();

    const n = parseInt(fileSystem.getNextLine());
    const rounds = fileSystem.getNextLine().split(' ').map(num => parseInt(num, RADIX));

    const result = solve(n, rounds);
    fileSystem.writeData('output.txt', result.toString());
}

// main()
