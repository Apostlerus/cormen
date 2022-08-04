/**
 * 90 ms, faster than 33.33%
 */
var mirrorReflection = function(p, q) {
  let d = q, count = 1;
  while(d % p > 0) {
    d += q;
    count++;
  }
  if ((d / p) % 2 === 0) {
    return 0;
  }
  if (count % 2 > 0) {
    return 1;
  }
  return 2;
};

let p = 3, q = 1;
console.log(mirrorReflection(p, q));
