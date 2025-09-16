const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let count = 0;
let n;
let houses;

_reader.on('line', line => {
    if (count === 0) {
        n = Number(line);
    } else if (count === 1) {
        houses = line.split(' ').map(Number);
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    let distance = n;
    const left = new Array(n).fill(n);
    const right = new Array(n).fill(n);
    for (let i = 0; i < n; i ++) {
        if (houses[i] === 0) {
            distance = 0;
        } else {
            distance++;
        }
        left[i] = distance;
    }
    distance = n;
    for (let j = n - 1; j >= 0; j--) {
        if (left[j] === 0) {
            distance = 0;
        } else {
            distance++;
        }
        right[j] = Math.min(distance, left[j]);
    }
    console.log(right.join(' '));
}
