/**
 * 171 ms, faster than 75.66%
 */
var findDuplicate = function(paths) {
  let t = {};
  paths.map(path => {
    let idx = path.indexOf(' ');
    let dir = path.substring(0, idx);
    path = path.substring(idx + 1).split(')');
    for (let i = 0; i < path.length - 1; i++) {
      if (i > 0) {
        path[i] = path[i].trim();
      }
      let filename, content;
      [filename, content] = path[i].split('(');
      if (t[content] === undefined) {
        t[content] = [dir + '/' + filename];
      } else {
        t[content].push(dir + '/' + filename);
      }
    }
  });
  let res = [];
  for (let k in t) {
    if (t[k].length > 1) {
      res.push(t[k]);
    }
  }
  return res;
};

let paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"];
console.log(findDuplicate(paths));