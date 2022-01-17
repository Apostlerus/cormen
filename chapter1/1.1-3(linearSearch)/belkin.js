let A = [31, 41, 59, 26, 41, 58];
let v = 26;

let result = false;
for (let i  = 0; i < A.length; i++) {
  if (v === A[i]) {
    result = i;
    break;
  }
}
console.log(result);
