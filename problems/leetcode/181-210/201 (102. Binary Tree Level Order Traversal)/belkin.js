/**
 * 59 ms, faster than 99.21%
 */
var levelOrder = function(root) {
  if (!root) {
    return [];
  }
  let list = [root, null];
  let arr = [];
  let res = [];
  while (list.length) {
    let node = list.shift();
    if (node === null) {
      res.push(arr);
      arr = [];
      if (list.length) {
        list.push(null);
      }
      continue;
    }
    if (node !== undefined) {
      arr.push(node.val);
    }
    if (node !== undefined && node.left) {
      list.push(node.left);
    }
    if (node !== undefined && node.right) {
      list.push(node.right);
    }
  }
  return res;
};
