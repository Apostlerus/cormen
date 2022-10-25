/**
 * 88 ms, faster than 85.70%
 */
var kthSmallest = function(root, k) {
  let arr = [];
  let l = [root];
  while (l.length) {
    let node = l.shift();
    arr.push(node.val);
    if (node.left) {
      l.push(node.left);
    }
    if (node.right) {
      l.push(node.right);
    }
  }
  arr.sort((a, b) => a - b);
  return arr[k - 1];
};
