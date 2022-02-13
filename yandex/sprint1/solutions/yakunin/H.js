const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

const _inputLines = [];

_reader.on('line', line => {
    _inputLines.push(line);
});

process.stdin.on('end', solve);

function solve() {
    const result = removeLeadingZeros(sum(_inputLines[0], _inputLines[1])).join('')
    console.log(result)
}

let sum = (A, B) => {
    const C = []
    let mem = 0;
    let firstLength = A.length;
    let secondLength = B.length;
    let maxLength = Math.max(firstLength, secondLength);


    for (let i = 0; i < maxLength; i ++) {
        let j = maxLength - i;
        const first = parseInt(A[firstLength - i - 1]) || 0
        const second = parseInt(B[secondLength - i - 1]) || 0
        switch (first + second) {
            case 0:
                C[j] = 0 || mem;
                mem = 0;
                break;
            case 1:
                if (mem) {
                    C[j] = 0;
                    mem = 1
                } else {
                    C[j] = 1;
                    mem = 0;
                }

                break;
            case 2:
                if (mem) {
                    C[j] = 1;
                } else {
                    C[j] = 0;
                }
                mem = 1
                break;
        }
    }
    C[0] = mem;
    return C;
}

let removeLeadingZeros = (arr) => {
    let result = []

    let leadingZeros = true;

    for (let i = 0; i < arr.length; i++) {
        if (leadingZeros && arr[i] === 0) {
            continue;
        }
        leadingZeros = false;
        result.push(arr[i])
    }
    if (result.length === 0) {
        return [0];
    }
    return result;
}