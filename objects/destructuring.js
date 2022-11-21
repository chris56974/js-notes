let foo = { a: 1, b: 2 };
let { a, b } = foo;
a // 1
b // 2

let { a: alias } = foo;
alias // 1

let { c = 10, d = 5 } = { c: 3 }
c // 3
d // 5

let { x, ...remaining } = { x: 1, a: 2, b: 3 }
console.info(x);         // 1
console.info(remaining); // {a: 2, b: 3} 

let someFunc = ({ a, b }, c) => a + b + c; // names (a, b) must match
someFunc(foo, 3) // 6

someFunc = ({ a = 1, b = 3 }, c) => a + b + c;
someFunc({ a: 5 }, 3) // 11

foo = [{ x: 1, y: 'a' }, { x: 2, y: 'b' }, { x: 3, y: 'c' }];
const [, , { y }] = foo; // skips first 2
console.log(y); // "c"