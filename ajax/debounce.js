/** 
 * Performance optimization technique for "rate limiting" 
 * the amount of events a browser can fire off at once. 
 * It's helpful because some events when fired too quickly can cause lag. 
 * What we do is set a delay between events so that we don't make so many.
 */
let a = 0

const debounce = (fn, delay) => {
	let timer;
	return () => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn()
		}, delay);
	}
}

const debouncej = (fn, delay) => {
	let timer;
	return (...args) => {
		clearTimeout(timer)
		timer = setTimeout(() => {
			fn(...args)
		}, delay);
	}
}

const ev = () => console.log(a++)
const ev2 = (count) => console.log(a += count)

const debouncedEvent = debounce(ev, 500);

window.addEventListener('scroll', ev) // LAG
window.addEventListener('scroll', debouncedEvent) // no lag