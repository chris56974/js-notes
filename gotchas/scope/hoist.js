// It's when JS moves all declarations to the top of the current scope

function foo() {
	/** 
	 * JS doesn't look up the scope chain for the value of a
	 * because a exists inside this function and its variable is hoisted
	 * to the top and set to undefined
	 */
	console.log(a) // undefined 
	bar();         // new EC created
	var a = true;
	console.log(a) // true
}

function bar() {
	var a;
	console.log(a) // undefined
}

var a = false // false

foo() 