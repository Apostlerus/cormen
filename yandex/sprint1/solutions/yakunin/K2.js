const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let length;
let X;
let K;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        length = parseInt(line)
    } else if (count === 1) {
        X = line;
    } else {
        K = BigInt(line);
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    console.log((BigInt(X.replace(/ /g, '')) + K).toString().split('').join(' '))
}