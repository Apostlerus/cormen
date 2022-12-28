const RADIX =  10;

class FileSystem {
    /**
     * init current fs currentLine and lines of our input file
     */
    constructor() {
        this.fs = require('fs');
        this.currentLine = 0;
        this.lines = [];
    }

    /**
     * read the data from the source and save state
     *
     * @param filename
     * @param encoding
     * @param flag
     * @returns {*}
     */
    readData(filename = 'input.txt', encoding = 'utf-8', flag = 'r') {
        const file = this.fs.readFileSync(filename, encoding);
        this.lines = file.split('\n');
        this.currentLine = 0;
        return file;
    }

    /**
     * Write data to the output file
     *
     * @param filename
     * @param data
     */
    writeData(filename = 'output.txt', data) {
        this.fs.writeFileSync(filename, data);
    }

    /**
     * Get next line
     *
     * @returns {*}
     */
    getNextLine() {
        return this.lines[this.currentLine++]
    }
}

/**
 * The solution
 * @param {number} n total rounds count
 * @param {number[]} rounds round results
 * @returns {number} max draw streak
 */
function solve(n, rounds) {
    let maxDrawStreak = 0;
    if (n === 1 || n === 0) {
        return maxDrawStreak;
    }
    let zeroCount = 0;
    let oneCount = 0;
    let resultArray = [];
    for (let i = 0; i < n; i ++) {
        if (rounds[i] === 0) {
            zeroCount++;
        } else {
            oneCount++;
        }
        resultArray.push(zeroCount - oneCount);
    }
    for (let i = 0; i < n; i++) {
        for (let j = n - 1; j > i; j--) {
            if ((i === 0 && resultArray[j] === 0) || (i !== 0 && resultArray[i] === resultArray[j])) {
                let currentMaxDrawStreak = j - i + 1;
                if (currentMaxDrawStreak > maxDrawStreak) {
                    maxDrawStreak = currentMaxDrawStreak;
                }
            }
        }
    }

    return maxDrawStreak;
}

/**
 * Main function for getting data call solution and write data to output
 */
const main = () => {
    const fileSystem = new FileSystem()
    // fileSystem.readData('./sprint4/inputs/G.txt'); // for local filesystem (different project structure)
    fileSystem.readData();

    const n = parseInt(fileSystem.getNextLine());
    const rounds = fileSystem.getNextLine().split(' ').map(num => parseInt(num, RADIX));

    const result = solve(n, rounds);
    fileSystem.writeData('output.txt', result.toString());
}

main()
