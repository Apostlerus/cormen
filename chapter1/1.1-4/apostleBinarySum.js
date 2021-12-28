let apostleBinarySum = (A, B) => {
    if (A.length !== B.length) return
    const C = []
    let mem = 0;
    for (let i = A.length - 1; i > 0; i --) {
        let j = i + 1
        switch (A[i] + B[i]) {
            case 0:
                C[j] = 0 || mem;
                mem = 0;
            break;
            case 1:
                if (mem) {
                    C[j] = 0;
                    mem = 1
                } else {
                    C[j] = 1;
                    mem = 0;
                }

            break;
            case 2:
                if (mem) {
                    C[j] = 1;
                } else {
                    C[j] = 0;
                }
                mem = 1
            break;
        }
    }
    C[0] = mem;
    return C;
}

A = [1,0,1]
B = [1,1,1]

console.log(apostleBinarySum(A, B)) // [1,1,0,0]

A = [1,1,1,1,1,0,0,0,0,1,1]
B = [1,1,1,1,0,1,0,1,0,1,0]

console.log(apostleBinarySum(A, B)) // [1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1]
