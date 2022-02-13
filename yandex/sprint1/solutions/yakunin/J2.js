console.time('codezup')
const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let number;

_reader.on('line', line => {
    number = parseInt(line);
});

process.stdin.on('end', solve);

function solve() {
    const result = [];
    let i = 2;
    while(i <= number) {
        if (number % i === 0) {
            result.push(i);
            number /= i;
            continue
        }
        i++;
    }
    console.log(result.join(' '));
}
console.timeEnd('codezup')