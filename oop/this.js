/** 
 * this refers to the object that a method was called on (aka context). 
 * It's dynamic and not assigned a value until we call it on something. 
 * We need it because we want to call the same method on multiple different objects. 
 * 
 * There's four ways to bind this to an object.
 */
let foo = new Foo() // 1. new binds this to foo
foo = () => this    // 2. this is globally bound to the window object

foo = {
	bar() { return this }, // 3. implicitely binds to foo 
	baz() {
		return function () { return this }.bind(this) // 4. explicitly binds to foo
	}
}