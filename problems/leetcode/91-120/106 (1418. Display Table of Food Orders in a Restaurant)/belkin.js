/**
 * 243 ms, faster than 50.00%
 */
var displayTable = function(orders) {
  let food = new Set;
  let tables = {};
  orders.map(order => {
    food.add(order[2]);
    if (tables[order[1]] === undefined) {
      tables[order[1]] = {};
    }
    if (tables[order[1]][order[2]] === undefined) {
      tables[order[1]][order[2]] = 1;
    } else {
      tables[order[1]][order[2]]++;
    }
  });
  food = [...food];
  food.sort().unshift('Table');
  let result = [];
  result.push(food);
  let tableNumbers = Object.keys(tables).map(num => parseInt(num, 10));
  tableNumbers.sort((a, b) => a - b);
  tableNumbers.map(num => {
    let row = [];
    row.push(num.toString(10));
    for (let i = 1; i < food.length; i++) {
      if (tables[num][food[i]] === undefined) {
        row.push('0');
      } else {
        row.push(tables[num][food[i]].toString(10));
      }
    }
    result.push(row);
  });
  return result;
};

let orders = [
  ["David","3","Ceviche"],
  ["Corina","10","Beef Burrito"],
  ["David","3","Fried Chicken"],
  ["Carla","5","Water"],
  ["Carla","5","Ceviche"],
  ["Rous","3","Ceviche"]
];
console.log(displayTable(orders));
