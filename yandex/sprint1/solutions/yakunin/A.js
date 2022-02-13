const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const [a,x,b,c] = _inputLines[0].split(' ').map(num => parseInt(num));

    console.log(a*x*x + b*x + c);
}