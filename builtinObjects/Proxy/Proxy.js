/** 
 * The global Proxy built-in object lets you create proxy objects for a 
 * specific object, and then those proxy objects can have their own ways
 * of handling fundamental operations.
 */
const foo = { a: 1 }

/** 
 * get() is a "trap"
 */
const handler = {
	get(target, property, receiver) { 
		console.log(property)
		console.log(target)
		console.log(receiver)
	},
}

const proxy = new Proxy(foo, handler);