const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let text;

_reader.on('line', line => {
    text = line;
});

process.stdin.on('end', solve);

function solve() {
    let l = 0;
    let r = text.length - 1;
    let result = true;
    for (let i = 65; i < 91; i++) {
        console.log(String.fromCharCode(i))
    }
    for (let i = 97; i < 123; i++) {
        console.log(String.fromCharCode(i))
    }
}