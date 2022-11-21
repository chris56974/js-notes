/** 
 * WeakMap is a collection of key-value pairs whose keys must be objects 
 * and whose values can be any type. It does not create any strong references
 * to its keys
 */
let a = new WeakMap(); // Can only store objects but better GC
let b = { name: 'john' }

a.set(b, "foo");
a.get(b) // foo
b = null
a.get(b) // undefined
