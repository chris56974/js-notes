const foo = { a: 1 }
foo.toString() // [object Object]

if ('a' in foo) delete foo.a

const bar = foo; // shallow copy
const b = { ...a } // ibid

let obj = { a: 1, b: 2 }
obj.map() // Error

object.method   // this is a pointer to a method (unbound)
object.method() // this is calling a method on an object (bound to object)