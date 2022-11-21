/** 
 * A callback is a function that you pass into a another function (HOF) as an argument 
 * so that you can call it back later (after you get back the result of some async operation). 
 * 
 * Callbacks are not asynchronous by themselves, all callbacks are synchronous by default
 * and run immediately. The only time they become asynchronous is when you pass them 
 * (as a cb) to an asynchronous function (like setTimeout).
 * 
 * So usually you launch an async operation in a HOF, and then set it to run a callback
 * when you get back a result. JS is smart and instead of waiting for that async operation,
 * JS will jump out of the HOF so it can continue executing everything else that's synchronous. 
 * Then when there's nothing left, and our async result arrives JS jumps back into the HOF 
 * from earlier and then runs the callback with the result. 
 * 
 * Your callbacks should be "error-first callbacks" which means all your errors should be put
 * in the first parameter of your callback. 
 */

function HOF(callback) {
	setTimeout(callback)
	console.log("first")
}

let callback = () => console.log("third")
HOF(callback)
console.log("second")