/**
 * 108 ms, faster than 48.33%
 */
var nextGreaterElement = function(nums1, nums2) {
  let res = [];
  nums1.map(num => {
    let a = -1;
    let i = nums2.indexOf(num) + 1;
    while (i < nums2.length) {
      if (nums2[i] > num) {
        a = nums2[i];
        break;
      }
      i++;
    }
    res.push(a);
  });
  return res;
};

let nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1, nums2));
