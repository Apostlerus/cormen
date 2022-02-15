// submit id https://contest.yandex.ru/contest/22450/run-report/65184799/

const RADIX =  10;
const PLAYERS = 2;
const MAX_KEY_VALUE = 9;

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

    /**
     * Get all lines
     *
     * @returns {[]|*}
     */
    getLines() {
        return this.lines;
    }
}

/**
 *  The solution
 *
 * @param {number} k - number of fingers of each user
 * @param {string[]} keyBoard - the keyboard with digits and dots
 * @returns {number} - wins count
 */
const solve = (k, keyBoard) => {
    let buttonsCount = new Map()

    keyBoard.forEach(row => {
        row.split('').forEach(key => {
            const number = parseInt(key, RADIX);

            // if it's not a number, i.e. the dot - '.' skip it, we don't need it
            if (Number.isNaN(number)) {
                return;
            }

            if (buttonsCount.has(number)) {
                buttonsCount.set(number, buttonsCount.get(number) + 1);
            } else {
                buttonsCount.set(number, 1);
            }
        });
    });


    // now we have buttons count and can check initial conditions
    let score = 0;
    for (let i = 1; i <= MAX_KEY_VALUE; i++) {
        if (!buttonsCount.has(i)) {
            continue;
        }

        // in case if number of buttons more then number of pals fingers - skip this as well
        if (buttonsCount.get(i) > k * PLAYERS) {
            continue;
        }

        score ++;
    }

    return score;
}

/**
 * Main function for getting data call solution and write data to output
 */
const main = () => {
    const fileSystem = new FileSystem()
    // fileSystem.readData('../../inputs/B.txt'); // for local filesystem (different project structure)
    fileSystem.readData();
    const lines = fileSystem.getLines();

    let k = parseInt(lines[0], RADIX);
    let keyBoard = lines.slice(1)

    const score = solve(k, keyBoard)
    fileSystem.writeData('output.txt', score.toString())
}

main()
