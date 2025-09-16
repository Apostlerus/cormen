/**
 * ChatGPT - решение
 */

const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const k = +input[0];
const counts = Array(10).fill(0);

for (let i = 1; i <= 4; i++) {
    for (const ch of input[i]) {
        if (ch !== '.') counts[+ch]++;
    }
}

let won = 0;
for (let t = 1; t <= 9; t++) {
    if (counts[t] > 0 && counts[t] <= 2 * k) {
        won++;
    }
}

console.log(won);
