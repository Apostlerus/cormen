const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let number;

_reader.on('line', line => {
    number = parseInt(line);
});

process.stdin.on('end', solve);

function solve() {
    let rest = 0;
    let result = ''
    while(number) {
        rest = number % 2
        number = number >> 1
        result = rest + result
    }

    console.log(result);
}