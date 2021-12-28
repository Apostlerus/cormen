const A = [31, 41, 59, 26, 41, 58]
const B = []
let min
let minIndex
while (B.length < A.length) {               // c1 N раз
    min = Infinity                          // c2 N раз
    minIndex = A.length                     // c3 N раз
    for (let i = 0; i < A.length; i++) {    // c4 N^2 раз
        if (A[i] <= min) {                  // c5 N^2 раз
            min = A[i]                      // c6 N^2 раз
            minIndex = i                    // c7 N^2 раз
        }
    }
    A[minIndex] = Infinity                  // c8 N раз
    B.push(min)                             // c9 N раз
}
console.log(B) // [26, 31, 41, 41, 58, 59]

// сложность в худшем и среднем O(N) = N^2