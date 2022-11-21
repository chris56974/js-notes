/** 
 * Prototypal inheritance, which really should be called "prototypal delegation" is
 * when you delegate the execution of a method to its prototype object.
 * Look at my gotcha notes for some pitfalls with prototypes
 */
let parent = {
	value: 2,
	foo() {
		return this.value + 1
	}
}

let child = {
	__proto__: parent
}
child.foo() // 3
child.value = 4
child.foo() // 5

/** 
 * The method of prototypal inheritance up above is fine, but it can be
 * tiresome writing __proto__: parent for every child object you create.
 * 
 * So you can use constructor functions instead. The cons are that you
 * might put unwanted methods on an object and the constructor might 
 * store unique information that is only generated once on each object
 */

function Base() { }
function Derived() { }

Base.prototype.addWhateverYouWantToPassDownHere = 1 // or function() {}

// DON'T DO THIS,
// It re-assigns the prototype property and removes the constructor property 
// Derived.prototype = Object.create(Base.prototype)

// Do this instead
Object.setPrototypeOf(
	Derived.prototype,
	Base.prototype,
);


/** 
 * The final way is to use Object.create() or Object.setPrototypeOf()
 * You don't need a constructor, see prototype.js for example of a constructor
 */
const parentBase = { a: 1 }
const childDerived = Object.create(parentBase)
Object.setPrototypeOf(parentBase, { b: 2 })
