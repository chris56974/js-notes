// Creates a new array
// slice(beginI, endI) // inclusive -> exclusive

let foo = [1, 2, 3]
let bar = foo.slice(1)
// bar // [2,3]

foo = [1, { a: 1 }]
bar = foo.slice() // shallow copy

bar[1].a = 9
bar // [1, { a: 9 }]
foo // [1, { a: 9 }]

foo = [1, [1]]
bar = foo.slice() // ibid

bar[1][0] = 3
bar // [1, [3]]
foo // [1, [3]]
