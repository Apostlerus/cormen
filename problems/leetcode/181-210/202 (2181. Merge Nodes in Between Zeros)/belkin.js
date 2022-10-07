var mergeNodes = function(head) {
  let res = new ListNode(), sum = 0;
  let node = res;
  head = head.next;
  while (head.next !== null) {
    if (head.val !== 0) {
      sum += head.val;
    } else {
      node.val = sum;
      node.next = new ListNode();
      node = node.next;
      sum = 0;
    }
    head = head.next;
  }
  node.val = sum;
  return res;
};
