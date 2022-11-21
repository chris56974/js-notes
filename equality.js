/** 
 *  ==  structural "loose" equality
 *  === referential "strict" equality
 */
let foo = { a: 1 }
console.log(foo == { a: 1 })  // false (they reference different objects)
console.log(foo === { a: 1 }) // false (ibid)

var bar = foo;

console.log(foo == bar)  // true (they reference the same object)
console.log(foo === bar) // true (ibid)
