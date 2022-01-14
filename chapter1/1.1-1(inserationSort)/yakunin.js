const A = [31, 41, 59, 26, 41, 58]
for (let j = 1; j < A.length; j++) {
    let key = A[j]
    // добавить A[j] к отсортированной части A[0 .. j - 1]
    let i = j - 1
    while (i >= 0 && A[i] > key) {
        A[i+1] = A[i--]
    }
    A[i+1] = key
}
console.log(A) // [26, 31, 41, 41, 58, 59]