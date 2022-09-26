/**
 * 88 ms, faster than 90.16%
 */
var equationsPossible = function(equations) {
  let equals = [];
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] !== '=') {
      continue;
    }
    let found = -1;
    for (let j = 0; j < equals.length; j++) {
      if (equals[j].has(equations[i][0]) || equals[j].has(equations[i][3])) {
        if (found === -1) {
          equals[j].add(equations[i][0]);
          equals[j].add(equations[i][3]);
          found = j;
        } else {
          equals[found] = new Set([...equals[found], ...equals[j]]);
        }
      }
    }
    if (found === -1) {
      equals.push(new Set([equations[i][0], equations[i][3]]));
    }
  }
  for (let i = 0; i < equations.length; i++) {
    if (equations[i][1] === '!') {
      if (equations[i][0] === equations[i][3]) {
        return false;
      }
      for (let j = 0; j < equals.length; j++) {
        if (equals[j].has(equations[i][0]) && equals[j].has(equations[i][3])) {
          return false;
        }
      }
    }
  }
  return true;
};

let equations = ["a==z","a==b","b==c","c==d","b==y","c==x","d==w","g==h","h==i","i==j","a==g","j!=y"];
console.log(equationsPossible(equations));
