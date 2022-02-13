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
        } else if (isPrime(number)) {
            result.push(number)
            break;
        } else {
            i++;
        }
    }
    console.log(result.join(' '));
}

function isPrime(n) {
    if (n === 1) {
        return true;
    }
    let i = 2;
    while (i * i <= n) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }
    return true
}
console.timeEnd('codezup')