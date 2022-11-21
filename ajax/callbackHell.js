/** 
 * Callback hell is when you run too many callbacks on the 
 * result of an asynchronous operation. In synchronous code, 
 * you would normally run each function one right after the 
 * other, changing the result as you go down. But in asynchronous
 * code you can't do that because the result is undefined until 
 * the async operation is finished. So you have to keep nesting
 * each function inside the first callback instead. 
 */
function foo(a) {
	setTimeout(() => {
		let asyncResult = 1
		a(asyncResult)
	})
}

// naive approach 
let a = foo(num => num)
a + 2 // ERROR a is undefined! 

// callback hell approach 
foo(num => {
	num + 2
	foo(() => {
		return num + 3 // num is 5
	})
})

hell(() => { () => { () => { } } })