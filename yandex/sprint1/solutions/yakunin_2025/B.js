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
    const won = isVictory() ? 'WIN' : 'FAIL';
    console.log(won);
}

function isEven(x) {
    return x % 2 === 0;
}

function isVictory() {
    const [a, b, c] = _inputLines[0].split(' ').map(num => parseInt(num));

    if (isEven(a) && isEven(b) && isEven(c))  {
        return true;
    }

    if (!isEven(a) && !isEven(b) && !isEven(c))  {
        return true;
    }

    return false;
}
