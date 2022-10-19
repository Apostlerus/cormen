/**
 * 87 ms, faster than 74.09%
 */
var removeNthFromEnd = function(head, n) {
  let orig = head;
  let i = 0;
  while (head) {
    i++;
    head = head.next;
  }
  if (i === 1) {
    return head;
  }
  if (i === n) {
    return orig.next;
  }
  head = orig;
  let j = 0;
  while (head) {
    j++;
    if (j === i - n) {
      if (head.next.next) {
        head.next = head.next.next;
      } else {
        head.next = null;
      }
      break;
    }
    head = head.next;
  }
  return orig;
};