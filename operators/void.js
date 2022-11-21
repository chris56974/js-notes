/** 
 * Void is a unary operator that takes an expression, 
 * runs it and then returns undefined (falsey)
 * 
 * It's used if you want to evaluate something for its
 * side effect but don't want it's return value 
 * 
 * When the browser follows a URI, it first evaluates 
 * the code in the URI and then replaces the contents
 * of the page with the return value. You might want 
 * to use void to run a script in a URI but keep the page the same.
 * 
 * <a href="javascript:void(document.body.style.backgroundColor='green');">
 */
void expression
void(expression) // ibid

void 2 == '2';   // false (evaluates to undefined then compares with 2)

void function foo() { // without void it'd be uncaught syntax error
	console.log("bar"); 
}();

try { 
	foo(); 
} catch(e) { 
	console.log(e)
}