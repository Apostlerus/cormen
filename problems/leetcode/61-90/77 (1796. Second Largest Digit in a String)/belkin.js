/**
 * 92 ms, faster than 63.83%
 * Два пуша -1 в конец итогового набора - это на исключительные ситуации,
 * когда разных цифр 0 или 1.
 */
var secondHighest = function(s) {
  let set = {};
  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      set[s[i]] = 1;
    }
  }
  let nums = Object.keys(set).map(a => parseInt(a));
  nums.push(-1);
  nums.push(-1);
  nums.sort((a, b) => b - a);
  return nums[1];
};

let s = "dfa1232451afd";
console.log(secondHighest(s));
