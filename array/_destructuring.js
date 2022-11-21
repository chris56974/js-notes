/** 
 * "Take an array/object apart and save it into variables"
 */
const arr = [1,2]
const [a, b] = arr
a // 1
b // 2

const [c, d, ...rest] = [1, 2, 3, 4]
c // 1
d // 2
rest // [3, 4]

[e = 1, f = 2] = [1] // default values
e // 1
f // 2

let g = 1
let h = 2
[g, h] = [h, g] // switcheroo
// a // 2
// b // 1

const foo = (a, b) => [a, b];
const bar = () => [1, 2, 3]

const [i, k] = foo(1, 2); 
i // 1
k // 2

const [l, , n] = bar(); // skip one
l // 1
n // 3
