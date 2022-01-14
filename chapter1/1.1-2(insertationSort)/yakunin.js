const A = [5, 2, 4, 6, 1, 3]
for (let j = 1; j < A.length; j++) {
    let key = A[j]
    // добавить A[j] к отсортированной части A[0 .. j - 1]
    let i = j - 1
    while (i >= 0 && A[i] < key) {
        A[i+1] = A[i--]
    }
    A[i+1] = key
}
console.log(A) // [6, 5, 4, 3, 2, 1]