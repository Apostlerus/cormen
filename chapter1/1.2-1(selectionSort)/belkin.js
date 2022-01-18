const A = [31, 41, 59, -1, -1, -2, 26, 41, 58, 0];

let min;
for (let i = 0; i < A.length - 1; i++) {
  min = i;
  for (let j = i + 1; j < A.length; j++) {
    if (A[j] < A[min]) {
      min = j;
    }
  }
  [A[min], A[i]] = [A[i], A[min]];
}

console.log(A);
