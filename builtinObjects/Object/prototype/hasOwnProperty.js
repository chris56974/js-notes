/** 
 * Checks to see if the property is owned by the object
 * or if it had to reach up the prototype chain to get it.
 */
function A() {}
A.prototype.foo = 2

const a = new A()
a.bar = 2

a.hasOwnProperty('foo') // false 
a.hasOwnProperty('bar') // true