// в процессе, не дожата

const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];
let count = 0;
let n;
let xList;
let k;
let kStr;

_reader.on('line', line => {
    if (count === 0) {
        n = Number(line);
    } else if (count === 1) {
        xList = line.split(' ').map(Number);
        console.log(xList);
    } else if (count === 2) {
        kStr = line;
        k = Number(line);
        console.log(k);
    }
    count++;
});

process.stdin.on('end', solve);

function solve() {
    const kCount = kStr.length;
    const xCount = xList.length;
    let memory = 0;
    for (let i = 0; i < kCount; i++) {
        const xNum = xCount - i > 1 ? Number(xList[xCount - i - 1]) : 0;
        let sum = Number(kStr[kCount - i - 1]) +xNum + memory;
        if (sum > 9) {
            memory = 1;
            sum = sum - 10;
        }
        xList[xCount - i - 1] = sum;
    }

    console.log(xList);
}
