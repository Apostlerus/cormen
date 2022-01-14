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