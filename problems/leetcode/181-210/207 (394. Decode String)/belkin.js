/**
 * 60 ms, faster than 94.96%
 */
var decodeString = function(s) {
  let res = '';
  let queue = [];
  let counter = '';
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      counter += s[i];
    } else if (s[i] === '[') {
      queue.push({
        count: parseInt(counter),
        str: '',
      });
      counter = '';
    } else if (s[i] === ']') {
      let last = queue.pop();
      let str = '';
      for (let i = 0; i < last.count; i++) {
        str += last.str;
      }
      if (queue.length) {
        queue[queue.length - 1].str += str;
      } else {
        res += str;
      }
    } else {
      if (queue.length) {
        queue[queue.length - 1].str += s[i];
      } else {
        res += s[i];
      }
    }
  }
  return res;
};

let s = "3[a2[c]]";
console.log(decodeString(s));
// accaccacc
