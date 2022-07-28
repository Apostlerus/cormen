/**
 * 83 ms, faster than 80.57%
 */
var finalPrices = function(prices) {
  let final = [];
  for (let i = 0; i < prices.length; i++) {
    let price = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= prices[i]) {
        price -= prices[j];
        break;
      }
    }
    final.push(price);
  }
  return final;
};

let prices = [8,4,6,2,3];
console.log(finalPrices(prices));
