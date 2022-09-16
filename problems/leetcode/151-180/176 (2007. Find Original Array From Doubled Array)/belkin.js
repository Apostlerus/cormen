/**
 * 417 ms, faster than 87.50%
 */
var findOriginalArray = function(changed) {
  if (changed.length % 2 !== 0) {
    return [];
  }
  changed.sort((a, b) => a - b);
  let t = {};
  for (let i = 0; i < changed.length; i++) {
    if (t[changed[i]] === undefined) {
      t[changed[i]] = 1;
    } else {
      t[changed[i]]++;
    }
  }
  let res = [];
  let good = true;
  for (let i = 0; i < changed.length; i++) {
    let el = changed[i];
    if (t[el] < 1) {
      continue;
    }
    t[el]--;
    let a = el * 2;
    if (t[a] === undefined || t[a] < 1) {
      good = false;
      break;
    }
    res.push(el);
    t[a]--;
  }
  return good ? res : [];
};

let changed = [0,0,3,6];
console.log(findOriginalArray(changed));
