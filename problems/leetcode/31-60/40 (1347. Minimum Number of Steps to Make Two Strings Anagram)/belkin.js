/**
 * 5985 ms, faster than 5.06%
 * Ожидаемо долгий реплейс. Зато кратко :)
 */
var minSteps = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '');
  }
  return t.length;
};

/**
 * 144 ms, faster than 70.04%
 * Ну получше
 */
var minSteps2 = function(s, t) {
  let table = {}, sum = 0;
  for (let i = 0; i < t.length; i++) {
    if (table.hasOwnProperty(t[i])) {
      table[t[i]]++;
    } else {
      table[t[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (table.hasOwnProperty(s[i])) {
      table[s[i]]--;
    }
  }
  for (let letter in table) {
    sum += Math.max(table[letter], 0);
  }
  return sum;
};

let s = "leetcode", t = "practice";
console.log(minSteps2(s, t));
