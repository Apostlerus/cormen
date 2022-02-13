const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let estates = [];
let n;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line)
    } else {
        estates = line.split(' ').map(num => parseInt(num));
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    let current;
    for (let i = 0; i < n; i ++) {
        if (estates[i] === 0) {
            current = 0;
            continue;
        }
        if (current === undefined) {
            estates[i] = Number.MAX_SAFE_INTEGER;
            continue;
        }
        estates[i] = ++current;
    }

    current = undefined;
    for (let j = n - 1; j >= 0; j --) {
        if (estates[j] === 0) {
            current = 0;
            continue;
        }
        if (current === undefined) {
            continue;
        }
        estates[j] = Math.min(++current, estates[j]);
    }

    console.log(estates.join(' '));
}