/**
 * 84 ms, faster than 89.01%
 */
var makeGood = function(s) {
  let a = [String.fromCharCode(4)];
  for (let i = 0; i < s.length; i++) {
    let last = a.pop();
    let next = s[i];
    if (Math.abs(last.charCodeAt(0) - next.charCodeAt(0)) === 32) {
      continue;
    }
    a.push(last);
    a.push(next);
  }
  a.shift();
  return a.join('');
};

let s = "JTqEfAlhEfR";

console.log(makeGood(s));
