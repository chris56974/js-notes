// Returns the index of the first element in the array that satisfies a condition else returns -1. 

var arr = [
  { a: 1, b: false },
  { a: 2, b: false },
  { a: 3, b: true }
];

const foo = arr.find(el => el.b)
foo // { a: 3, b: true }

const bar = arr.find(el => el.a > 100)
bar // -1