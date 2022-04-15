/**
 * 65 ms, faster than 86.76%
 */
var minCostClimbingStairs = function(cost) {
  cost.unshift(0);
  cost.push(0);
  for (let i = 2; i < cost.length; i++) {
    cost[i] += Math.min(cost[i - 1], cost[i - 2]);
  }
  return cost.pop();
};

let cost = [1,100,1,1,1,100,1,1,100,1];
console.log(minCostClimbingStairs(cost));
//6
