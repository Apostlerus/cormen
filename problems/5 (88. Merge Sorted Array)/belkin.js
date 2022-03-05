/**
 * Не очень быстро с временным массивом, т.к. приходится еще раз проходить
 * перезаполнять исходный...
 * Не пойму, как сделать за n + m
 */
var merge = function(nums1, m, nums2, n) {
  let temp = [], i = 0, j = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      temp.push(nums1[i++]);
    } else {
      temp.push(nums2[j++]);
    }
  }
  while (i < m) {
    temp.push(nums1[i++]);
  }
  while (j < n) {
    temp.push(nums2[j++]);
  }
  for (let k = 0; k < n + m; k++) {
    nums1[k] = temp[k];
  }
};

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
