/**
 * начал, не готово
 */
var largestNumber = function(nums) {
  nums.sort((a, b) => {
    let alength = a.toString().length;
    let blength = b.toString().length;
    let diff = Math.abs(alength - blength);
    if (diff === 0) {
      return b - a;
    }
    if (alength > blength) {

    }
  });
};

let nums = [10,2];

console.log(largestNumber(nums));
