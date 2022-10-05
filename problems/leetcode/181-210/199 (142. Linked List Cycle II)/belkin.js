/**
 * 117 ms, faster than 58.20%
 */
var detectCycle = function(head) {
  let set = new Set();
  while (head) {
    if (!set.has(head)) {
      set.add(head);
      head = head.next;
    } else {
      return head;
    }
  }
  return head;
};
