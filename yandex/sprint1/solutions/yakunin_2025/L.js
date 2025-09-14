/**
 * Ну я не подглядывая в свою задачу также примерно и решил.
 * Но я сходил на литкод, нашел (find-the-difference) и там разница в 2 миллисекунды
 * в решениях между indexOf и map (в пользу map). По мне так банальная погрешность.
 * Можно, конечно, заморочиться с миллионом прогонов, но мне лично лень😅
 */


const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let count = 0;
let s;
let t;

_reader.on('line', line => {
    if (count === 0) {
        s = line;
    } else if (count === 1) {
        t = line;
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    const map = new Map();
    for (let i = 0; i < s.length; i ++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (map.has(t[j]) && map.get(t[j]) > 0) {
            map.set(t[j], map.get(t[j]) - 1);
        } else {
            console.log(t[j]);
        }
    }
}