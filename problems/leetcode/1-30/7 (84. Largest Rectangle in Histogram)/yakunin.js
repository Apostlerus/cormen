/**
 * В лоб решение, упирающиеся в TL
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let currentSquare = 0;
    let square = heights[0];
    let min = 0;
    for (let i = 0; i < heights.length; i++) {
        min = heights[i];
        currentSquare = min;
        for (let j = i + 1; j < heights.length; j++) {
            min = Math.min(min, heights[j]);
            currentSquare = Math.max(currentSquare, min * (j - i + 1));
        }
        square = Math.max(currentSquare, square);
    }
    return square;
};
console.log(largestRectangleArea([2,1,5,6,2,3]))

/**
 * Решение через стек (подсмотрено)
 *
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    heights.push(0);
    let stack = [];
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let heightStart = i;
        while (stack.length && heights[i] < stack[stack.length - 1][1]) {
            let [pos, height] = stack.pop();
            maxArea = Math.max(maxArea, (i - pos) * height);
            heightStart = pos;
        }
        stack.push([heightStart, heights[i]]);
    }
    return maxArea;
};

console.log(largestRectangleArea([2,1,5,6,2,3]))
