/** 
 * If they all fail in Promise.any(), it returns an AggregateError that you can listen to.
 */
const x = (item, delay) => new Promise(res => setTimeout(() => res(item), delay));

const a = () => x('a', 1000); // or Promise.resolve('a')
const b = () => x('b', 3000);
const c = () => x('c', 2000);

const sequence = async () => { // slowest
	const foo = await a();
	const bar = await b();
	const baz = await c();
	console.log(foo, bar, baz)
} 

const promises = [a(), b(), c()]

// Promise.all() waits for all promises to come back, if one fails they all fail
const all = async () => {
  const foo = await Promise.all(promises) 
  console.log(foo) // ["a", "b", "c"]
}

// Ibid, but if one fails it will continue to resolve them anyways
const allSettled = async () => {
  const foo = await Promise.allSettled(promises) 
  console.log(foo) // [{status: "fulfilled", value: "a"}, {status...}]
}

// Returns the first SETTLED promise, if one fails they all fail
const race = async () => { 
	const foo = await Promise.race(promises); 
	console.log(foo) // "a"
}

// Returns the first FULFILLED promise, if one fails it keeps going
const any = async () => { 
	const foo = await Promise.any(promises) 
	console.log(foo) // "a" (if a() failed it would wait for b())
}