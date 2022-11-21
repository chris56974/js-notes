/** 
 * Dynamic module imports allow you to load modules on demand at runtime. 
 * The import() method actually returns a promise that resolves to a module object.
 */

if (true) {
	// import foo from './bar' // ERROR

	import('./bar').then((module) => {
		module.default() // the default export module
	})

	// ibid with destructuring (rename it to foo)
	import('./bar').then(({ default: foo }) => { foo() }) 
}

// Async/await
target.addEventListener("click", async () => {
	const { default: foo } = await import('./bar')
	foo()
})