/**
 * Ну, собстна, на литкоде недавно коммитил ровно эту задачу.
 * Насчет скорости не уверен. indexOf внутри цикла - медленнее чем Map.has,
 * однако Map.set может нивелировать преимущество. Да и проход один.
 * на литкоде было 76мс с теми же вводными.
 *
 * Отличное упоминание, что такая задача есть на литкоде! еще бы номерок прикреплял😅
 */
function redundantLetter(str1, str2) {
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) === -1) {
      return str2[i];
    }
    str1 = str1.replace(str2[i], '');
  }
}

const reader = require('readline').createInterface({
  input: process.stdin,
});
const inputLines = [];
reader.on('line', line => {
  inputLines.push(line);
});
process.stdin.on('end', () => {
  let res = redundantLetter(inputLines[0], inputLines[1]);
  process.stdout.write(res + '');
  process.exit();
});
