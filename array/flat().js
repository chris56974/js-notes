// flattens nested arrays and removes empty arrays (mutates)

flat(depth) // default depth is 1

const foo = [1, [2, 3]]
const bar = [1, [[2]]]
const baz = ['a', , , , 'b'];

foo.flat()   // [1,2,3,4,5]
bar.flat()   // [1, Array(1)]
bar.flat(2); // [1, 2]
baz.flat();  // ['a', 'b']