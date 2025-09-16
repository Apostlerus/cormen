const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let count = 0;
let k;
const buttons = new Map();

_reader.on('line', line => {
    if (count === 0) {
        k = Number(line);
    } else {
        line.split('').forEach(s => {
            if (s !== '.') {
                const num = Number(s);
                if (buttons.has(num)) {
                    buttons.set(num, buttons.get(num) + 1);
                } else {
                    buttons.set(num, 1);
                }
            }
        });
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    let won = 0;
    for (let i = 1; i <= 9; i++) {
        if (k*2 >= buttons.get(i)) {
            won++;
        }
    }
    console.log(won);
}
