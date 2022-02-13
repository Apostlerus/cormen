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
        X = line.split(' ').map(num => parseInt(num));
    } else {
        K = parseInt(line);
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    let result = 0;
    for (let i = 0; i < length; i++) {
        result += X[i] * Math.pow(10, length - i - 1);
    }

    result += K;

    let power = 0;
    while (result / Math.pow(10, power) >= 1) {
        power++;
    }

    let resultArray = [];

    for (let j = 0; j < power; j ++) {
        const digit = Math.floor(result / Math.pow(10, power - j - 1));
        resultArray.push(digit);
        result -= digit * Math.pow(10, power - j - 1)
    }

    console.log(resultArray.join(' '))
}