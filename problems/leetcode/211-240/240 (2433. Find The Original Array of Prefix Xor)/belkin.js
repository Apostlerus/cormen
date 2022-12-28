/**
 * 210 ms Beats 96.89%
 */
var findArray = function(pref) {
  let last = pref[0];
  for (let i = 1; i < pref.length; i++) {
    let temp = pref[i];
    pref[i] = last ^ pref[i];
    last = temp;
  }
  return pref;
};

let pref = [5,2,0,3,1];

console.log(findArray(pref));
