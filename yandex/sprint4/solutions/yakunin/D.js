const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

let n = 0;
let count = 0;
let lines = [];

reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line, 10);
    } else {
        if (count <= n) {
            lines.push(line)
        }
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    let linesSet = new Set();
    lines.forEach(line => {
        if (!linesSet.has(line)) {
            linesSet.add(line);
            console.log(line)
        }
    })
}
