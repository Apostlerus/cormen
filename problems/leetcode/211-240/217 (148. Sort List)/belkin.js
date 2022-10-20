/**
 * 231 ms, faster than 84.13%
 */
var sortList = function(head) {
  if (!head) {
    return null;
  }
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => a - b);
  let res = new ListNode();
  res.val = arr[0];
  let r = res;
  for (let i = 1; i < arr.length; i++) {
    r.next = new ListNode();
    r = r.next;
    r.val = arr[i];
  }
  return res;
};