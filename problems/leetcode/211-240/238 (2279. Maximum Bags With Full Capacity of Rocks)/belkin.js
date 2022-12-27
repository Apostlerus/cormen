/**
 * 170 ms Beats 92%
 * 54.3 MB Beats 100%
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  for (let i = 0; i < capacity.length; i ++) {
    capacity[i] -= rocks[i];
  }
  capacity.sort((a, b) => a - b);
  let res = 0;
  for (let i = 0; i < capacity.length && additionalRocks >= capacity[i]; i++) {
    additionalRocks -= capacity[i];
    res++;
  }
  return res;
};

let capacity = [2,3,4,5], rocks = [1,2,4,4], additionalRocks = 2;

console.log(maximumBags(capacity, rocks, additionalRocks));
