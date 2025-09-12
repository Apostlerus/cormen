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
    const [n, words] = [Number(_inputLines[0]), _inputLines[1].split(' ')];
    let longest = words[0];
    let count = longest.length;
    for (let i = 1; i < words.length; i++) {
        if (count < words[i].length) {
            longest = words[i];
            count = words[i].length;
        }
    }
    console.log(longest);
    console.log(count);
}