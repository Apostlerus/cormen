const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let number;

_reader.on('line', line => {
    number = Number(line);
});

process.stdin.on('end', main);

function solve() {
    if (number === 0) {
        return "0";
    }

    const powers = [];
    let rest = number;

    while (rest > 0) {
        const pow = Math.floor(Math.log2(rest)); // ближайшая степень двойки
        rest -= 2 ** pow;
        powers.push(pow);
    }

    let result = "";
    for (let i = powers[0]; i >= 0; i--) {
        result += powers.includes(i) ? "1" : "0";
    }

    return result;

}

function main() {
    console.log(solve())
}