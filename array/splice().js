// MUTATES and returns the removed items

splice(startIndex, [deleteCount], [item1], [item2], []) 

const foo = ["a", "b", "c"]
const bar = foo.splice(0)
foo // []
bar // [a, b, c]

const b = bar.splice(2, 1)
b   // [c]
bar // [a, b, d]