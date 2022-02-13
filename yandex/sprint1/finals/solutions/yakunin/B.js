const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let lines = [];
let k;
let count = 0;
let buttonsMap = new Map()

_reader.on('line', line => {
    if (count === 0) {
        k = parseInt(line)
    } else {
        line.split('').forEach(num => {
            const number  = parseInt(num);
            if (Number.isNaN(number)) {
                return;
            }
            if (buttonsMap.has(number)) {
                buttonsMap.set(number, buttonsMap.get(number) + 1)
            } else {
                buttonsMap.set(number, 1)
            }
        })

        lines.push(line.split('').map(num => parseInt(num)).filter(v => v));
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    let score = 0;
    for (let i = 1; i <= 9; i++) {
        if (!buttonsMap.has(i)) {
            continue;
        }
        if (buttonsMap.get(i) > k*2) {
            continue;
        }
        score ++;
    }

    console.log(score);
}