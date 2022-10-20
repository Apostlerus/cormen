/**
 * 85 ms, faster than 85.52%
 */
var oddEvenList = function(head) {
  if (!head) {
    return null;
  }
  if (!head.next) {
    return head;
  }
  let a = head;
  let aa = a;
  let b = head.next;
  let bb = b;
  head = head.next;
  let i = true;
  while (head) {
    head = head.next;
    if (head) {
      if (i) {
        aa.next = head;
        aa = aa.next;
      } else {
        bb.next = head;
        bb = bb.next;
      }
    } else {
      bb.next = null;
    }
    i = !i;
  }
  aa.next = b;
  return a;
};