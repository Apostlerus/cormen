const A = [31, 41, 59, 26, 41, 58]
const B = [31, 41, 59, 26, 42, 58]

const hasDouble = (arr) => {
    const setA = new Set()
    for (let i = 0; i < arr.length; i++) {
        if (setA.has(arr[i])) {
            return true
        } else {
            setA.add(arr[i])
        }
    }
    return false
}

console.log(hasDouble(A)) // true
console.log(hasDouble(B)) // false

//сложность N вообще)) ладно, попробуем через NlogN, наверное так:
// Так тут еще и Set.has() имеет сложность O(n), так что вообще n2 в итоге)
// Но в своём примере я заюзал сет, по-другому, без поиска
// я сейчас ищу и не вижу того, что сложность has O(1) но это же всегда априори считалось? Отказываюсь верить, что не О(1) ))

/**
 * Блин, заставил меня лезть читать про сложность Set.has() в спеках ;)
 * Ну похоже что ты можешь быть прав. Но как-то неявно всё.
 * Я тут https://262.ecma-international.org/6.0/#sec-set.prototype.has прочитал,
 * что функция проверяет все элементы. Нет какой-то инфы про хэшмэпы.
 * А всякие чуваки на стековерфлоу то говорят что всё-таки O(1), что там
 * не линейный поиск, то говорят что всё-таки O(n).
 * И нашел бенчмарк какого-то чела, он сравнил has и includes.
 * Includes на больших данных линейно замедляется. Но и set замедляется,
 * по увеличению времени похоже на O(logN) примерно. Ну явно не O(1).
 * Так что алгоритм выше вполне тоже может оказаться O(NlogN) :))
 */

const hasDoubleNotOptimized = (arr) => {
    const sortedArray = arr.sort((a ,b) => a - b) // NlogN
    for (let i = 0; i < sortedArray.length - 1; i++) {
        if (sortedArray[i] === sortedArray[i + 1]) {
            return true
        }
    }
    return false
}

// O(NlogN + N) = O(NlogN)

console.log(hasDoubleNotOptimized(A)) // true
console.log(hasDoubleNotOptimized(B)) // false