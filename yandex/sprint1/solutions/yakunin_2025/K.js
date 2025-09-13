// хрень какая-то получилась, ладно не буду удалять😃

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let count = 0;
let n;
let xList;
let k;

_reader.on('line', line => {
    if (count === 0) {
        n = Number(line);
    } else if (count === 1) {
        xList = line.split(' ').map(Number);
    } else if (count === 2) {
        k = Number(line);
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    const x = unlist(xList);
    const result = x + k;
    console.log(toList(result));
}

function unlist(nArray) {
    let reduced = 0;
    for (let j = 0; j < nArray.length; j++) {
        reduced += nArray[nArray.length - j - 1] * Math.pow(10, j);
    }
    return reduced;
}

function toList(number) {
    return number.toString().split('').join(' ');
}