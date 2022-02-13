const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let text;

_reader.on('line', line => {
    text = line;
});

process.stdin.on('end', solve);

function solve() {
    let l = 0;
    let r = text.length - 1;
    let result = 'True';
    while (l < r) {
        let codeLeft = text.charCodeAt(l);
        if (codeLeft >= 65 && codeLeft <= 90) {
            codeLeft += 32;
        } else if ((codeLeft > 90 && codeLeft < 97) || codeLeft > 122 || codeLeft < 65) {
            l++
            continue;
        }
        let codeRight = text.charCodeAt(r);
        if (codeRight >= 65 && codeRight <= 90) {
            codeRight += 32;
        } else if ((codeRight > 90 && codeRight < 97) || codeRight > 122 || codeRight < 65) {
            r--
            continue;
        }
        l++;
        r--;
        if (codeLeft !== codeRight) {
            result = 'False';
            break;
        }
    }

    console.log(result);
}