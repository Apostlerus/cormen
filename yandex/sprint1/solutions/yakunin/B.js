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
    const [a,b,c] = _inputLines[0].split(' ').map(v => Math.abs(parseInt(v)));

    const result = [3, 0].includes(a % 2 + b % 2 + c % 2) ? 'WIN' : 'FAIL';
    console.log(result);
}