const A = [31, 41, 59, 26, 41, 58];
const B = [31, 41, 59, 26, 42, 58];

let res = false;

/** Сначала хотел изобрести какой-то полу-велосипед через js функции.
 *  Но выходит, что всё равно внутри линейной функции нужно
 *  использовать сортировку, чтобы поиск стал logN и задача
 *  была бы доказана. Ну либо сортировку до поиска.
 *  Без сортировки получается n2
 */
function hasDuplicatesSlow(list) {
  return list.some((element, i) => {       // O(n)
    return list.indexOf(element) !== i;    // O(n)
  })
}

console.log(hasDuplicatesSlow(A));
console.log(hasDuplicatesSlow(B));

/**
 * Но вот идея использовать Set - хороша.
 * Только без поиска, нам же нужен только факт наличия дубля.
 * new Set() займёт O(n)
 * length и size займут O(1)
 * Итого O(n)
 */
function hasDuplicates(list) {
  return list.length !== new Set(list).size; // крутая идея!
}

console.log(hasDuplicates(A));
console.log(hasDuplicates(B));
