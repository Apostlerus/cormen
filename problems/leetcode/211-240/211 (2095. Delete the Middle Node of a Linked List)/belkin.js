/**
 * 841 ms, faster than 80.61%
 * 85.2 MB, less than 88.30%
 */
var deleteMiddle = function(head) {
  let orig = head;
  let mid = head;
  let i = 0;
  while (head) {
    i++;
    if (i % 2 === 0) {
      mid = mid.next;
    }
    head = head.next;
  }
  head = orig;
  if (head == mid) {
    orig = null;
  }
  while (head) {
    if (head.next == mid) {
      if (head.next.next) {
        head.next = head.next.next
      } else {
        head.next = null;
      }
    }
    head = head.next;
  }
  return orig;

};