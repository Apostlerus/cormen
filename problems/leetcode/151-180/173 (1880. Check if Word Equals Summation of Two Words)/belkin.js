/**
 * 94 ms, faster than 42.41%
 */
var isSumEqual = function(firstWord, secondWord, targetWord) {
  let arr = [firstWord.split(''), secondWord.split(''), targetWord.split('')];
  for (let w in arr) {
    for (let i = 0; i < arr[w].length; i++) {
      arr[w][i] = arr[w][i].charCodeAt(0) - 97;
    }
    arr[w] = parseInt(arr[w].join(''));
  }
  return arr[0] + arr[1] === arr[2];
};

let firstWord = "acb", secondWord = "cba", targetWord = "cdb";
console.log(isSumEqual(firstWord, secondWord, targetWord));
