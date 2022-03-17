/**
 * 72 ms, faster than 89.92%
 * Взялся за задачи с плохим условием, а такие есть на литкоде.
 * Куча крайних ситуаций.
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) {
    return false;
  }
  if (s.length === 1) {
    return false;
  }
  let lettersCount = {}, diffCount = 0, sDiff = '', goalDiff = '';
  for (let i = 0; i < s.length; i++) {
    if (lettersCount.hasOwnProperty(s[i])) {
      lettersCount[s[i]]++;
    } else {
      lettersCount[s[i]] = 1;
    }
    if (s[i] !== goal[i]) {
      diffCount++;
      sDiff = sDiff + s[i]
      goalDiff = goal[i] + goalDiff;
    }
    if (diffCount > 2) {
      return false;
    }
  }
  if (diffCount === 1) {
    return false;
  }
  if (diffCount === 2) {
    return (goalDiff === sDiff);
  }
  return (Math.max(...Object.values(lettersCount)) > 1);
};

let s = "ab", goal = "ba";
console.log(buddyStrings(s, goal));
