let apostleLinearSearch = (A:number[], v:number): number | false => {
    for (let i = 0; i < A.length; i++) {
        if (A[i] === v) {
            return i;
        }
    }
    return false;
}

let A = [31, 41, 59, 26, 41, 58];
let v = 26;
console.log(apostleLinearSearch(A,v)) // 3

v = 266;
console.log(apostleLinearSearch(A,v)) // false