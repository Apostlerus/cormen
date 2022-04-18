/**
 * 64 ms, faster than 83.41%
 * Хотел было сначала как-то эвристически разложить в нужном порядке,
 * сгруппировав по индексу, но сфейлил тесты, по-лёгкому не получилось.
 * Ну а на предложенных входных данных и так скорость приличная.
 */
var createTargetArray = function(nums, index) {
  let target = [];
  for (let i = 0; i < nums.length; i++) {
    let temp = target.splice(index[i]);
    target.push(nums[i]);
    target = target.concat(temp);
  }
  return target;
};

let nums2 = [0,1,2,3,4], index2 = [0,1,2,2,1];
let nums = [4,2,4,3,2], index = [0,0,1,3,1];
console.log(createTargetArray(nums2, index2));
//[2,2,4,4,3]
