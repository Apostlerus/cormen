/**
 * 88 ms, faster than 57.90%
 */
var checkIfExist = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i] * 2) !== -1 && arr.indexOf(arr[i] * 2) !== i) {
      return true;
    }
  }
  return false;
};

let arr = [-2,0,10,-19,4,6,-8];
console.log(checkIfExist(arr));
