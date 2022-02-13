const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let n;
let days;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line)
    } else {
        days = line.split(' ').map(num => parseInt(num));
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    let result = 0;
    for (let i = 0; i < n; i ++) {
        let left = days[i - 1] !== undefined ? days[i - 1] : -274;
        let right = days[i + 1] !== undefined ? days[i + 1] : -274;
        if ((days[i] > left) && (days[i] > right)) {
            result++;
        }
    }


    console.log(result);
}