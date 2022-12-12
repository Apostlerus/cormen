const fs = require('fs');
const allFileContents = fs.readFileSync('3.input', 'utf-8');
let groups = [];
let group = [];
allFileContents.split(/\r?\n/).forEach(line =>  {
  group.push(line);
  if (group.length === 3) {
    groups.push(group);
    group = [];
  }
});
if (group.length) {
  groups.push(group);
}

function rucksackBadges(groups) {
  let sum = 0;
  for (let i = 0; i < groups.length; i++) {
    let t = {}, t2 = {}, l1, l2, l3, s;
    [l1, l2, l3] = groups[i];
    for (let j = 0; j < l1.length; j++) {
      t[l1[j]] = t[l1[j]] + 1 || 1;
    }
    for (let j = 0; j < l2.length; j++) {
      if (t[l2[j]] !== undefined) {
        t2[l2[j]] = t2[l2[j]] + 1 || 1;
      }
    }
    for (let j = 0; j < l3.length; j++) {
      if (t2[l3[j]] !== undefined) {
        s = l3[j];
      }
    }
    let code = s.charCodeAt(0) - 96;
    if (code < 1) {
      code += 58;
    }
    sum += code;
  }
  return sum;
}

console.log(rucksackBadges(groups));
