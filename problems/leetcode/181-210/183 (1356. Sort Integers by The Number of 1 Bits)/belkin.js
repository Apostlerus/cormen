/**
 * 186 ms, faster than 32.20%
 */
var sortByBits = function(arr) {
  arr.sort((a, b) => {
    let ab = a.toString(2);
    let abi = 0;
    for (let i = 0; i < ab.length; i++) {
      if (ab[i] === '1') {
        abi++;
      }
    }
    let bb = b.toString(2);
    let bbi = 0;
    for (let i = 0; i < bb.length; i++) {
      if (bb[i] === '1') {
        bbi++;
      }
    }
    if (abi === bbi) {
      return a - b;
    }
    return abi - bbi;
  });
  return arr;
};

let arr = [0,1,2,3,4,5,6,7,8];
console.log(sortByBits(arr));