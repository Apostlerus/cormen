/**
 * 72 ms, faster than 86.38%
 */
var flipAndInvertImage = function(image) {
  let len = image[0].length;
  let mid = Math.floor(len / 2);
  let hasMidBit = len % 2 > 0;
  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < mid; j++) {
      image[i][j] = image[i][j] ^ 1;
      image[i][len - j - 1] = image[i][len - j - 1] ^ 1;
      [image[i][j], image[i][len - j - 1]] = [image[i][len - j - 1], image[i][j]];
    }
    if (hasMidBit) {
      image[i][mid] = image[i][mid] ^ 1;
    }
  }
  return image;
};

let image = [[1,1,0],[1,0,1],[0,0,0]];
console.log(flipAndInvertImage(image));
//[[1,0,0],[0,1,0],[1,1,1]]
