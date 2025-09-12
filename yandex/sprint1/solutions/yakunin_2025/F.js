const _readline = require('readline');

const _reader = _readline.createInterface({
    input: process.stdin
});

let text = '';

_reader.on('line', line => {
    text = line;
});

process.stdin.on('end', main);

function solve() {
    const TRUE = 'True';
    const FALSE = 'False';
    const len = text.length;
    if (len < 2) {
        return FALSE;
    }
    let l = 0;
    let r = text.length - 1;
    let left = text[l];
    let right = text[r];
    while (l < r) {
        if (!isNumberOrLetter(left)) {
            l++;
            left = text[l];
            continue;
        }
        if (!isNumberOrLetter(right)) {
            r--;
            right = text[r];
            continue;
        }
        if (!isEqual(left, right)) {
            return FALSE;
        }
        l++;
        r--;
        left = text[l];
        right = text[r];
    }
    return TRUE;
}

function main() {
    console.log(solve());
}

function isLetter(char) {
    const code = char.codePointAt(0);
    if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        return true;
    }
    return false;
}

function isNumber(char) {
    const code = char.codePointAt(0);
    return code >= 48 && code <= 57;
}

function isNumberOrLetter(char) {
    return isNumber(char) || isLetter(char);
}

function isEqual(char1, char2) {
    if (!isNumberOrLetter(char1) || !isNumberOrLetter(char2)) {
        return false;
    }
    if (isNumber(char1) && isNumber(char2)) {
        return  char1 === char2;
    }
    const code1 = char1.charCodeAt(0);
    const code2 = char2.charCodeAt(0);
    if (code1 === code2 || code1 + 32 === code2 || code1 === code2 + 32) {
        return true;
    }
    return false;
}