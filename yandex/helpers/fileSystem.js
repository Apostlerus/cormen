// @TODO возвращать this, чтобы цепные вызовы делать типа asArray() etc
import fs from 'fs';

const RADIX =  10;

export default class FileSystem {
    /**
     * init current fs currentLine and lines of our input file
     */
    constructor() {
        this.fs = fs;
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
