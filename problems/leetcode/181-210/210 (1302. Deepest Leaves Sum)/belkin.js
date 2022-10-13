/**
 * 291 ms, faster than 62.68%
 */
var deepestLeavesSum = function(root) {
  let a = [];
  function check(node, depth) {
    a.push([node.val, depth]);
    if (node.left) {
      check(node.left, depth + 1);
    }
    if (node.right) {
      check(node.right, depth + 1);
    }
  }
  check(root, 1);
  a.sort((aa, bb) => bb[1] - aa[1]);
  let d = a[0][1];
  let res = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i][1] < d) {
      break;
    }
    res += a[i][0];
  }
  return res;
};
