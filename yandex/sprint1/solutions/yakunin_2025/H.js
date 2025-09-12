const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let line1;
let line2;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        line1 = line;
    } else if (count === 1) {
        line2 = line;
    }
    count++;
});

process.stdin.on('end', main);

function main() {
    console.log(solve());
}

function solve() {
    const length1 = line1.length;
    const length2 = line2.length;
    let l1 = length1 - 1;
    let l2 = length2 - 1;
    let result = '';
    let memory = 0;
    while (l1 >= 0 || l2 >= 0) {
        // console.log(`line1: ${line1}, line2: ${line2}, l1: ${l1}, l2: ${l2}`);
        const line1number = l1 >= 0 ? line1[l1] : '0';
        const line2number = l2 >= 0 ? line2[l2] : '0';
        if (line1number === '1' && line2number === '1') {
            // console.log(`line1number = ${line1number} = 1 && line2number = ${line2number} = 1`);
            if (memory === 1) {
                // console.log(`Memory ${memory}`);
                result = '1' + result;
            } else {
                // console.log(`Memory ${memory}`);
                result = '0' + result;
            }
            memory = 1;
            // console.log(`result = '${result}'`);
        } else if (line1number === '0' && line2number === '0') {
            // console.log(`line1number = ${line1number} = 0 && line2number = ${line2number} = 0`);
            if (memory === 1) {
                // console.log(`Memory ${memory}`);
                result = '1' + result;
                memory = 0;
            } else {
                // console.log(`Memory ${memory}`);
                result = '0' + result;
            }
            // console.log(`result = '${result}'`);
        } else {
            // console.log(`line1number = ${line1number} = 0|1 && line2number = ${line2number} = 0|1`);
            if (memory === 1) {
                // console.log(`Memory ${memory}`);
                result = '0' + result;
                memory = 1;
            } else {
                // console.log(`Memory ${memory}`);
                result = '1' + result;
            }
            // console.log(`result = '${result}'`);
        }
        l1--;
        l2--;
        // console.log('------------------');
    }

    if (memory) {
        // console.log(`last Memory ${memory}`);
        result = '1' + result;
    }
    return result;
}