/**
 * 620 ms, faster than 54.22%
 */
var findSubstring = function(s, words) {
  let wCount = words.length;
  let wSize = words[0].length;
  let res = [];
  for (let i = 0; i <= s.length - (wCount * wSize); i++) {
    let sub = s.substring(i);
    if (i === 12) {
      console.log(sub);
    }
    let w = [...words];
    while (w.length) {
      let sw = sub.substring(0, wSize);
      let j = w.indexOf(sw);
      if (j === -1) {
        break;
      }
      sub = sub.substring(wSize);
      w.splice(j, 1);
    }
    if (!w.length) {
      res.push(i);
    }
  }
  return res;
};

let s = "barfoofoobarthefoobarman", words = ["bar","foo","the"];
console.log(findSubstring(s, words));
