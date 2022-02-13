const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let n;
let words;
let count = 0;

_reader.on('line', line => {
    if (count === 0) {
        n = parseInt(line)
    } else {
        words = line.split(' ');
    }
    count++
});

process.stdin.on('end', solve);

function solve() {
    let longest = words[0];
    let longestLength = longest.length;
    let wordsCount = words.length;
    for (let i = 1; i < wordsCount; i ++) {
        let length = words[i].length;
        if (length > longestLength) {
            longest = words[i];
            longestLength = length;
        }
    }


    console.log(longest);
    console.log(longestLength)
}