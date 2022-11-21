// When you push to an array without a default value, it pushes to all the arrays.
const a = new Array(3).fill([]); // [[], [], []]
a[0] = [1] // [[1], [], []]
a[0].pop() // [[], [], []]
a[0].push(1) // [[1], [1], [1]] !!!

const b = new Array(3).fill([0]) // it needs a default value
b[0].push(1) // [[1],]