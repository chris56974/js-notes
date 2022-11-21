/** 
 * Transforms a list of key-value pairs into an object.
 */
const foo = new Map([['a', 'b'], ['c', 1]]);
const bar = [['a', 1], ['b', 2]];

const baz = Object.fromEntries(foo);
const qux = Object.fromEntries(bar);

baz // { a: 'b', c: 1 }
qux // { a: 1, c: 2 }