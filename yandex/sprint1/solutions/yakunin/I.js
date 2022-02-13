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
    while(number % 4 === 0) {
        number = number >> 2
    }
    console.log(number === 1 ? 'True' : 'False');
}
