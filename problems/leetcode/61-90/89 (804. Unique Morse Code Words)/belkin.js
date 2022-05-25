/**
 * 90 ms, faster than 41.46%
 */
var uniqueMorseRepresentations = function(words) {
  const morseLetters = [
    ".-","-...","-.-.","-..",".","..-.","--.","....","..",".---",
    "-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--",
    "-..-","-.--","--.."
  ];
  let uniqueWords = new Set();
  for (let i = 0; i < words.length; i++) {
    let morseWord = '';
    for (let j = 0; j < words[i].length; j++) {
      morseWord += morseLetters[words[i].charCodeAt(j) - 97];
    }
    uniqueWords.add(morseWord);
  }
  return uniqueWords.size;
};

let words = ["gin","zen","gig","msg"];
console.log(uniqueMorseRepresentations(words));
