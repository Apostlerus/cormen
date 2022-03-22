/**
 * 76 ms, faster than 99.05%
 * Что-то было уже похожее в яндекс практикуме
 */
var minOperations = function(boxes) {
  let index = 0, ballsToPut = [], balls = 0;
  for (let i = 0; i < boxes.length ; i++) {
    ballsToPut.push(index);
    if (parseInt(boxes[i]) === 1) {
      balls++;
    }
    index += balls;
  }
  index = 0;
  balls = 0;
  for (let i = boxes.length - 1; i >= 0 ; i--) {
    ballsToPut[i] += index;
    if (parseInt(boxes[i]) === 1) {
      balls++;
    }
    index += balls;
  }
  return ballsToPut;
};

let boxes = "001011";
console.log(minOperations(boxes)); //[11,8,5,4,3,4]
