/** 
 * Re-assigning a Constructor.prototype is not a good idea
 * 
 * Objects that you created before you re-assigned the Constructor.prototype 
 * will still point to the old [[Prototype]] and objects you create afterwards
 * will point to a completely different [[Prototype]]
 * 
 * When you reassign the Constructor.prototype, all new instances of Constructor
 * will have their constructor property point to Object instead of the Constructor
 */

function Foo() { }
const foo = new Foo()
Foo.prototype = { a: "jeff" }
const bar = new Foo()

foo.constructor // Foo
bar.constructor // Object
foo.__proto__.constructor // Foo

// You can fix it with this but still not recommended
Object.getPrototypeOf(bar).constructor = Foo
bar.constructor // Foo
