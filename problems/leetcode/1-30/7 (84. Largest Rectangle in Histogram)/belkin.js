/**
 * 76 ms, faster than 99.47%
 * По времени неплохо получилось, но памяти ест дополнительными массивами.
 * Общий смысл такой - мы тут считаем для каждого столбика максимальные четырехугольник,
 * в который он может войти по высоте. То есть надо знать, какие столбы слева и справа
 * ниже него.
 * В общем, мы сохраняем в массивах left и right индексы "краёв" каждого "столбика",
 * то есть индексы тех столбиков, которые меньше текущего, на них будет обрываться
 * наш искомый четырехугольник. Ну или если меньшего нет, то ставим -1 слева или i+1 справа.
 * Каждый индекс столбика кладём в стек, и в следующих итерациях сравниваем верхушку
 * стека с текущим элементом, и если верхушка больше, мы текущий столбик устанавливаем
 * как наименьший справа для того столбика, который в этой верхушке. Потом срезаем верхушку
 * и сравниваем предыдущий столбик в верхушке, для него тоже текущий может быть меньшим справа.
 * Затем в стеке остаются столбики левее и меньше текущего, ставим верхушку как левый
 * меньший для текущего, либо если в стеке пусто, значит слева нет меньших столбиков,
 * ставим -1.
 */
var largestRectangleArea = function(heights) {
  let stack = [],
      max = 0,
      len = heights.length,
      left = new Array(len),
      right = new Array(len);
  for (let i = 0; i < len; i++) {
    right[i] = len;
    while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
      right[stack.pop()] = i;
    }
    left[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  for (let i = 0; i < len; i++) {
    let area = heights[i] * (right[i] - 1 - left[i]);
    max = Math.max(max, area);
  }
  return max;
};

let heights = [2,1,5,6,2,3];
// let heights = [2,4];
console.log(largestRectangleArea(heights));
