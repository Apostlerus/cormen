const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let number;

_reader.on('line', line => {
    number = Number(line);
});

process.stdin.on('end', solve);

function solve() {
    const nums = [];
    for (let i = 2; i <= number; i++) {
        while (number % i === 0) {
            number = number / i;
            nums.push(i);
        }
    }
    console.log(nums.join(' '));
}