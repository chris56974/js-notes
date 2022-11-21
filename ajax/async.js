/*
	Async/await is syntactic sugar over promises. 
	The async keyword is just like new Promise() and the await keyword is just like .then(). 
	Everything outside the async function will continue to run synchronously. 
	Whenever you hit await inside an async function, JS is not going to evaluate anything
	in the function past that point until the callback comes back. 
	It's just like how it won't move onto the next then() until the first then() comes back. 
	Everything outside the async function or outside the then() will continue to run synchronously.
*/

let asyncTask = () => Promise.resolve("done")
asyncTask = async () => "done" // ibid

async function foo() {
	// old way
	asyncTask().then(result => console.log(result)).catch()
	console.log("this runs right away")
	return fetch(url).then(res => res.json)

	// new way
	try {
		const result = await asyncTask()
		console.log("this doesn't run until bar() is finished!")
		console.log(result)
	} catch (error) {
		console.log(error)
	}

	const res = await fetch(url);
	return await res.json();
}