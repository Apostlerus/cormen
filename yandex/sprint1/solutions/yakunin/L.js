const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let firstMap = new Map()
let lines = []

_reader.on('line', line => {
    lines.push(line)
});

process.stdin.on('end', solve);

function solve() {
    for (let i = 0; i < lines[0].length; i++) {
        if (!firstMap.has(lines[0][i])) {
            firstMap.set(lines[0][i], 1)
            continue;
        }
        firstMap.set(lines[0][i], firstMap.get(lines[0][i]) + 1)
    }

    for (let j = 0; j < lines[1].length; j++) {
        if (!firstMap.has(lines[1][j])) {
            console.log(lines[1][j]);
            break;
        }
        if (firstMap.get(lines[1][j]) - 1 < 0) {
            console.log(lines[1][j]);
            break;
        }

        firstMap.set(lines[1][j], firstMap.get(lines[1][j]) - 1)
    }
}