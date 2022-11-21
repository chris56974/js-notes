/** 
 * This function is dead code
 */
function foo() {
	a = 200
}

foo() 
console.log(a) // 2

var a = 1
function foo() { a = 2 } // mutates
foo() // a is now 2 