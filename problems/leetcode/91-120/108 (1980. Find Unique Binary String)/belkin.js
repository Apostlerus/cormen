/**
 * 71 ms, faster than 83.33%
 */
var findDifferentBinaryString = function(nums) {
  let length = nums[0].length;
  const max = Math.pow(2, length) - 1;
  nums = new Set(nums.map(num => parseInt(num, 2)));
  for (let i = 0; i <= max; i++) {
    if (!nums.has(i)) {
      let leading = new Array(length).fill('0').join('');
      let binary = i.toString(2);
      binary = leading.substr(binary.length) + binary;
      return binary;
    }
  }
};

let nums = ["111","011","001"];
console.log(findDifferentBinaryString(nums));
