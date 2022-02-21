const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let matrix = [];
let n;
let m;
let count = 0;
let currentColumn = 0;

_reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line, 10)
    } else if (count === 1) {
        m = parseInt(line, 10)
    } else {
        currentColumn = 0;
        line.split(' ').forEach(num => {
            if (matrix[currentColumn] === undefined) {
                matrix[currentColumn] = [];
            }
            matrix[currentColumn][count - 2] = num;
            currentColumn++;
        })
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    matrix.forEach(row => {
        console.log(row.join(' '))
    })
}