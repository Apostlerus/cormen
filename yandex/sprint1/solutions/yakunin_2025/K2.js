/*
похоже на твое решение, но т.к. я его до конца не понял, не могу сказать с уверенностью😅
Тут идея в том, что я прибавляю к последнему элементу списочного числа все число,
единцы общего числа берем, а десятки и далее переносим дальше. И так пока либо наше число окончательно не прибавится.
Либо пока не кончится списочное число.
P.S. метод с бигинтом из другого решения тесты прошел, но можно выдумать тесты, где он упадет, а тут сколько угодно
большое списочное число может быть.
P.P.S. немного триггерит от unshift, т.к. это тяжелая операция, но лень оптимизимировать, хочу побыстрее
пройти/повторить то, что уже решал и сфокусироваться на новых задачах
*/
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let count = 0;
let n;
let xList;
let k;

_reader.on('line', line => {
    if (count === 0) {
        n = Number(line);
    } else if (count === 1) {
        xList = line.split(' ').map(Number);
    } else if (count === 2) {
        k = Number(line);
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    const xCount = xList.length;
    let memory = k;

    for (let i = 0; i < xCount; i++) {
        if (memory === 0) {
            break;
        }
        const total = xList[xCount - i - 1] + memory;
        const rest = total % 10;
        memory = Math.floor(total / 10);
        xList[xCount - i - 1] = rest;
    }

    if (memory > 0) {
        xList.unshift(...memory.toString().split('').map(Number));
    }

    console.log(xList.join(' '));
}
