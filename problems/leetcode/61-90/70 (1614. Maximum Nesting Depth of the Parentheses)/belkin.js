/**
 * 66 ms, faster than 81.47%
 */
var maxDepth = function(s) {
  let depth = 0, max = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth++
      if (depth > max) {
        max = depth;
      }
    } else if (s[i] === ')') {
      depth--;
    }
  }
  return max;
};

let s = "(1+(2*3)+((8)/4))+1";
console.log(maxDepth(s));
//3
