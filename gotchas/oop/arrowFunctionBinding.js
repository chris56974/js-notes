/** 
 * Arrow functions don't bind their own this, which means this is
 * inherited lexically from the parent scope. Objects don't create scope, 
 * functions create scope! So you have to look at the function that's 
 * running your arrow function lexically. Lexically meaning, the order
 * in which things are written as opposed to where things are called (dynamically). 
 */
var a = {
	foo() { return this },
	bar() { return () => this },
	baz() { return function () { return this } },
	qux: () => this
};

a.foo()   // a
a.bar()() // a
a.baz()() // globalThis
a.qux()   // globalThis
a.bah = () => this;
a.bah()   // globalThis

var qux = a.bar
var quz = a.baz
var qub = a.bak
qux() // globalThis