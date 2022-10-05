var middleNode = function(head) {
  let mid = head;
  let i = 0;
  while (head) {
    i++;
    if (i % 2 === 0) {
      mid = mid.next;
    }
    head = head.next;
  }
  return mid;
};
