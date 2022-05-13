/**
 * 60 ms, faster than 94.96%
 */
var checkIfPangram = function(sentence) {
  let letters = "thequickbrownfxjmpsvlazydg".split('');
  sentence = sentence.split('');
  letters = letters.filter((letter) => !sentence.includes(letter));
  return letters.length === 0;
};
