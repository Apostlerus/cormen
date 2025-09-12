const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let text = '';

_reader.on('line', line => {
    text = line;
});

process.stdin.on('end', main);

function main() {
    console.log(solve() ? 'True' : 'False');
}

function solve() {
    text = text.toLowerCase();
    const regEx = new RegExp(/[^a-z0-9]/gi);
    text = text.replace(regEx, '');
    const half = text.length / 2;
    if (text.length === 2 && text[0] !== text[1]) {
        return false;
    }
    for (let i = 0; i < half - 1; i++) {
        if (text[i] !== text[text.length - i - 1]) {
            return false;
        }
    }
    return true;
}