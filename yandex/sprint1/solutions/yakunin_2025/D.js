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
    console.log(solution());
}

function solution() {
    const [n, temperatures] = [ Number(_inputLines[0]), _inputLines[1].split(' ').map(Number)];
    if (n === 1) {

        return 1;
    }
    let chaos = 0;
    if (temperatures[0] > temperatures[1]) {
        chaos++;
    }
    for (let i = 1; i < n - 1; i++) {
        if ((temperatures[i] > temperatures[i - 1]) && (temperatures[i] > temperatures[i + 1])) {
            chaos++;
        }
    }

    if (temperatures[n - 1] > temperatures[n - 2]) {
        chaos++;
    }
    return chaos;
}