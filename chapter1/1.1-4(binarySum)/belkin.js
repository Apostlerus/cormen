const A = [1,1,1,1,1,0,0,0,0,1,1];
const B = [1,1,1,1,0,1,0,1,0,1,0];

//чёт захотелось вместо перебора применить perl-way ;D
console.log([...(parseInt(A.join(''), 2) + parseInt(B.join(''), 2)).toString(2)]);
//хотя задача была писать на псевдокоде, это я понимаю, алгоритмы же.
//но такие переборы это так скучно)
//читор))