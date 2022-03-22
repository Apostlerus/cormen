/**
 * 64 ms, faster than 92.18%
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = Math.max(...candies), res = [];
  candies.forEach((num) => {
    res.push((num + extraCandies) >= max);
  })
  return res;
};

let candies = [2,3,5,1,3], extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies));
