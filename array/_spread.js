/** 
 * The ES6 spread operator lets you spread an array (or an object) into each of its values.
 */

// ARRAYS
let arr = [2, 3, 4];
let newArr = [1, ...arr]; // [1,2,3,4]

arr = [2, 3];
const f = (a, b, c) => a + b
f(...arr);

// OBJECTS (ES9)
let x = { a: 1, b: 2 }
let y = { ...x, c: 3 } // SPREAD (shallow clone)
console.info(y);      // {a: 1, b: 2, c: 3} 

let { ...shallowClone } = { x: 1, foo: () => { } }; // SPREAD
console.info(shallowClone); // {x: 1, foo: ƒ}