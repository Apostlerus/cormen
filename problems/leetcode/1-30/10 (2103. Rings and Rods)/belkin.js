/**
 * Раскидываем индексы палок по цветам, т.о. если взять пересечение, получим индексы палок,
 * на которых есть все цвета.
 * 80 ms, faster than 65.93% Время какое-то нехорошее, есть что улучшить
 */
var countPoints = function(rings) {
  let colors = {R: new Set(), G: new Set(), B: new Set()};
  for (let i = 0; i < rings.length; i += 2) {
    colors[rings[i]].add(rings[i + 1]);
  }
  const intersection = new Set(
    [...colors.R].filter(x => (colors.G.has(x) && colors.B.has(x)))
  );
  return intersection.size;
};

let rings = "B0B6G0R6R0R6G9";
console.log(countPoints(rings));
