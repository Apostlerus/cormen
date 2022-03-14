/**
 * 96 ms, faster than 87.64%
 * В первом цикле разбиваем индексы на группы по требуемому количеству.
 * Во втором цикле разбиваем группы на подгруппы требуемого размера.
 */
var groupThePeople = function(groupSizes) {
  let groupsBySize = {}, res = [];
  for (let i = 0; i < groupSizes.length; i++) {
    if (groupsBySize[groupSizes[i]] === undefined) {
      groupsBySize[groupSizes[i]] = [];
    }
    groupsBySize[groupSizes[i]].push(i);
  }
  for (let size in  groupsBySize) {
    while (groupsBySize[size].length > 0) {
      res.push(groupsBySize[size].splice(0, size));
    }
  }
  return res;
};

let groupSizes = [2,1,3,3,3,2];
console.log(groupThePeople(groupSizes));
