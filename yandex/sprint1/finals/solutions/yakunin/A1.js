// submit id https://contest.yandex.ru/contest/22450/run-report/65185356/

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
 * @param {number} n estates count
 * @param {number[]} estates Estates' building number
 * @returns {number[]} array of closest distances from free land
 */
function solve(n, estates) {
    // first, go from the left to right
    let currentDistance;
    for (let i = 0; i < n; i ++) {
        // if it's free land for household mark our currentDistance as initial point
        if (estates[i] === 0) {
            currentDistance = 0;
            continue;
        }
        // if there was no free land mark it for backward search
        if (currentDistance === undefined) {
            estates[i] = Number.MAX_SAFE_INTEGER;
            continue;
        }
        estates[i] = ++currentDistance;
    }

    // second go back, from right to left
    currentDistance = undefined;
    for (let j = n - 1; j >= 0; j --) {
        // in case if we have free land just mark it as initial point for further counting
        if (estates[j] === 0) {
            currentDistance = 0;
            continue;
        }
        // in case if there was no initial point do nothing
        if (currentDistance === undefined) {
            continue;
        }

        // in case if we've already found initial point we just need to find from which side (left or right) it has closer distance
        estates[j] = Math.min(++currentDistance, estates[j]);
    }

    return estates;
}

/**
 * Main function for getting data call solution and write data to output
 */
const main = () => {
    const fileSystem = new FileSystem()
    // fileSystem.readData('../../inputs/A.txt'); // for local filesystem (different project structure)
    fileSystem.readData();

    const n = parseInt(fileSystem.getNextLine());
    const estates = fileSystem.getNextLine().split(' ').map(num => parseInt(num, RADIX));

    const result = solve(n, estates)
    fileSystem.writeData('output.txt', result.join(' '))
}

main()
