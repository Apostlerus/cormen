/**
 * 115 ms, faster than 68.53%
 */
var preorder = function(root) {
  let list = [root];
  let arr = [];
  while (list.length) {
    let node = list.shift();
    if (node) {
      arr.push(node.val);
    }
    if (node && node.children && node.children.length > 0) {
      for (let i = node.children.length - 1; i >=0; i--) {
        list.unshift(node.children[i]);
      }
    }
  }
  return arr;
};
