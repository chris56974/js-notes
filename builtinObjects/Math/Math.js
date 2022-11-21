/** 
 * Math is a global object with static methods. 
 * It's NOT an Object constructor.
 */
console.dir(Math)

let a;

a = Math.PI; // pi
a = Math.E; // Euler's number

a = Math.round(2.4); // 2
a = Math.ceil(2.4); // 3
a = Math.floor(2.8); // 2

a = Math.sqrt(64); // 8
a = Math.abs(-100); // 100

a = Math.pow(8, 2); // 64
a = 8 ** 2 // 64

a = Math.min(2, 33, 4, 1, 55, 6, 3, -2); // -2
a = Math.max(2, 33, 4, 1, 55, 6, 3, -2); // 55

a = Math.random(); // [0, 1)
a = Math.floor(Math.random() * 2); // [0, 1]

const betweenTwoNums = (max, min) => Math.floor(Math.random() * (max - min + 1) + min)