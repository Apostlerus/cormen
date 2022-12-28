const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin
});

let a;
let m;
let s;
let count = 1;

reader.on('line', line => {
    if (count === 1) {
        a = parseInt(line, 10);
    } else if (count === 2) {
        m = parseInt(line, 10);
    } else if (count === 3) {
        s = line;
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    let result = 0;
    let len = s.length;
    for (let i = 0; i < len; i++) {
        result = mod(result * a + s.charCodeAt(i), m)
    }
    console.log(result.toString());
}

function mod (a, b) {
    return a - Math.floor(a / b) * b
}
