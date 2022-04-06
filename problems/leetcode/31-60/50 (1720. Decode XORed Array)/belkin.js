/**
 * 104 ms, faster than 80.24%
 */
var decode = function(encoded, first) {
  let res = [first];
  for (let i = 0; i < encoded.length; i++) {
    res.push(encoded[i] ^ res[i]);
  }
  return res;
};

let encoded = [1,2,3], first = 1;
console.log(decode(encoded, first));
