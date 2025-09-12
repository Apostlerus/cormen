const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const row = parseInt(_inputLines[0]);
    const column = parseInt(_inputLines[1]);
    const matrix = [];
    for (let i = 0; i < row; i++) {
        matrix[i] = _inputLines[i + 2].split(' ').map(num => parseInt(num));
    }
    // console.log(matrix);
    const searchRow = parseInt(_inputLines[row + 2]);
    const searchColumn = parseInt(_inputLines[row + 3]);
    // console.log(searchRow, searchColumn);
    const neighbours = [];
    if (searchRow > 0) {
        neighbours.push(matrix[searchRow - 1][searchColumn]);
    }
    if (searchRow < row - 1) {
        // console.log(`${searchRow}(searchRow) < ${row}(row)`);
        neighbours.push(matrix[searchRow + 1][searchColumn]);
    }
    if (searchColumn > 0) {
        neighbours.push(matrix[searchRow][searchColumn - 1]);
    }
    if (searchColumn < column - 1) {
        neighbours.push(matrix[searchRow][searchColumn + 1]);
    }

    console.log(neighbours.sort((a,b) => a - b).join(' '));
}