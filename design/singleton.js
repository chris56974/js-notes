/** 
 * Creational pattern that uses a single class responsible for creating a single object. 
 * In JS we can do this with an IIFE. It makes it easy to find, but it's tricky to reverse 
 * if you change your mind. It's because everything used to go to one place (the singleton), 
 * but now they have to find the current instance or create one.
 */

const Singleton = (function () {
	let instance;
	function createInstance() { return new Object({ a: 1 }) }

	return {
		getInstance() {
			if (!instance) { instance = createInstance() }
			return instance
		}
	};
})();

const x = Singleton.getInstance();
const y = Singleton.getInstance(); // returns same thing but new var
x === y // true
x.a     // 1