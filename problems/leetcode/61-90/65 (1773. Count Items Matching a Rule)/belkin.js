/**
 * 80 ms, faster than 79.86%
 * Утренняя разминка
 * Наверное, не совсем оптимально собирать новый массив через фильтр,
 * быстрее было бы циклом пройтись и считать. Зато кратко, как мы любим :)
 */
var countMatches = function(items, ruleKey, ruleValue) {
  let keys = {type: 0, color: 1, name: 2};
  items = items.filter(item => item[keys[ruleKey]] === ruleValue);
  return items.length;
};

let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone";
console.log(countMatches(items, ruleKey, ruleValue));
//2
