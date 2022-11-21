/** 
 * Computed property names give you the ability
 * to set the names of object properties dynamically. 
 * You can run some computation on a key before it
 * becomes the key for a value inside an object.
 */
let foo = 'something'
let bar = { [foo]: 1 }

bar.foo       // undefined
bar[foo]      // 1
bar.something // 1

foo = "qux"
a[foo] // undefined
a.foo  // undefined

let a = "something"
let buz = { [a]: 1 } // { something: 1 }