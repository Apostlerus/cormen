/**
 * Мда, мысли у нас совпали практически по лекалу.
 * Хотя вот кажется, что алгоритмически правильнее было бы обойтись без сплита,
 * и одним проходом по символам чекать пробелы, и всё что до пробела совать
 * в некий стек - слово, и с каждым пробелом так же проверять длину стека.
 */
function longestWord(text) {
  let words = text.split(' '), longestLength = 0, longest;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestLength) {
      longest = words[i];
      longestLength = words[i].length;
    }
  }
  return [longest, longestLength];
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = longestWord(inputLines[1]);
  process.stdout.write(res[0] + '\n');
  process.stdout.write(res[1] + '');
  process.exit();
});
