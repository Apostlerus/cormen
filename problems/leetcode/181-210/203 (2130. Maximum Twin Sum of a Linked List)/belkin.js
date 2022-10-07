/**
 * 253 ms, faster than 42.54%
 */
var pairSum = function(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let max = Number.MIN_SAFE_INTEGER;
  let l = arr.length;
  for (let i = 0; i < (l / 2); i++) {
    let sum = arr[i] + arr[l - i - 1];
    if (sum > max) {
      max = sum;
    }
  }
  return max;
};
