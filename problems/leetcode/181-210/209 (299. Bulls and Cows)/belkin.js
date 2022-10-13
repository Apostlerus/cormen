/**
 * 95 ms, faster than 82.05%
 */
var getHint = function(secret, guess) {
  let s = secret.split('');
  let g = guess.split('');
  let as = 0;
  let bs = 0;
  let st = {};
  let gt = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] === g[i]) {
      as++;
    } else {
      st[s[i]] = st[s[i]] + 1 || 1;
      gt[g[i]] = gt[g[i]] + 1 || 1;
    }
  }
  for (let num in gt) {
    if (st[num] !== undefined) {
      bs += Math.min(gt[num], st[num]);
    }
  }
  return `${as}A${bs}B`;
};

let  secret = "1123", guess = "0111";
console.log(getHint(secret, guess));
