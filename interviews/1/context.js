// что выведет в консоль

function foo() {
    const x = 10;
    return {
        x: 20,
        bar: () => {
            console.log(this.x);
        },
        baz: function () {
            console.log(this.x);
        }
    };
}

obj = foo();
obj.bar(); // undefined
obj.baz(); // 20

const a = obj2.bar;
const b = obj2.baz;

a();
b();

const obj2 = foo.call({x: 30});
const y = obj2.bar;
const z = obj2.baz;

y();
z();

obj2.bar();
obj2.baz();

const abc = {x: 1}
console.log(abc.hasOwnProperty('__proto__'));
console.log(abc.__proto__.hasOwnProperty('__proto__'));