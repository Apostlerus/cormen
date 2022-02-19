/**
 * Ну такое, дольше парсить строку и чистить по условию.
 */
function isPalindrome(text) {
  text = text.replace(/[^A-z0-9]/gi, '').toLowerCase();
  let i = 0, j = text.length - 1;
  while (i <= j) {
    if (text[i] !== text[j]) {
      return 'False';
    }
    i++;
    j--;
  }
  return 'True';
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = isPalindrome(inputLines[0]);
  process.stdout.write(res + '');
  process.exit();
});
