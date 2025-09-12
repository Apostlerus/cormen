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
    const [n, text] = [Number(_inputLines[0]), _inputLines[1]];
    let longest = '';
    let count = 0;
    let currentCount = 0;
    let currentWord = '';
    for (let i = 0; i < n; i++) {
        if (currentCount === 0 && text[i] === ' ') {
            continue;
        }

        if (text[i] !== ' ') {
            currentWord += text[i];
            currentCount++;
        }

        if (text[i] === ' ' || i === n - 1) {
            if (count < currentCount) {
                longest = currentWord;
                count = currentCount;
            }
            currentWord = '';
            currentCount = 0;
        }


    }
    console.log(longest);
    console.log(count);
}