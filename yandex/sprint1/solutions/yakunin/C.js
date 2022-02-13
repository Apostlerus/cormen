const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const matrix = [];
let m;
let n;
let x;
let y;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line)
    } else if (count === 1) {
        m = parseInt(line)
    } else if (count === n + 2) {
        x = parseInt(line)
    } else if (count === n + 3) {
        y = parseInt(line)
    } else {
        matrix.push(line.split(' ').map(num => parseInt(num)));
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    const result = [];
    const startRow = x > 0 ? x - 1 : 0
    const startColumn = y > 0 ? y - 1 : 0
    const endRow = x < n - 1 ? x + 1 : n - 1
    const endColumn = y < m - 1 ? y + 1 : m - 1
    for (let i = startRow; i <= endRow; i++) {
        for (let j = startColumn; j <= endColumn; j++) {
            if (i !== x && j !== y || i === x && j === y) {
                continue;
            }
            result.push (matrix[i][j])
        }
    }

    console.log(result.sort((a,b) => a - b).join(' '));
}