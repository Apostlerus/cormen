const A = [123, 21, 0, 83, 5641556558, -31, 0, 322, -21];

for (let i = 1; i < A.length; i++) {
  const current = A[i];
  let j = i;
  while (j > 0 && A[j - 1] > current) {
    A[j] = A[--j];
  }
  A[j] = current;
}
console.log(A);
