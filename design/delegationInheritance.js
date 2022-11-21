/** 
 * A "delegate prototype" is just a prototype object. 
 * It's the same thing as prototypal inheritance using Object.create() but with factory functions.
 */
const prototypeObject = {
	foo() { return this.a }
};

let bar = Object.assign(Object.create(proto), { a: 1 }) // 1
bar.__proto__ // prototypeObject { foo() {} }

const Prototype = a => {
	let secret = 'secret'
	return Object.assign(Object.create(proto), { a, secret })
	return { ...Object.create(proto), a, secret }
}

const bug = Prototype("hello")