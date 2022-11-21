/** 
 * Concatenative inheritance or Traits is when you create objects 
 * using composable factory functions and each one adds more functionality. 
 * If you're memory conscious use prototypal inheritance instead.
 */
const canFoo = state => ({
	foo() { console.log(state.a) }
})

const canBar = state => {
	const hidden = 0;
	return {
		bar: () => hidden
	}
}

const x = { d: 20 }

const Factory = a => {
	let state = {
		a,
		b: 100,
		c: 0,
		...x
	}
	// return { ...canFoo(state), ...canBar(state) }
	// return { ...state, ...canFoo(state), ...canBar(state) }
	return Object.assign({}, canFoo(state), canBar(state))
}

const object1 = canFoo({ a: 'a' }) // can use directly
const object2 = Factory('a')     // or it can give it foo(), bar() and d
const object3 = Object.assign({}, canFoo, canBar); // give it foo(), bar()
const object4 = { ...canFoo, ...canbar, ...override } // ibid
const object6 = Object.assign({}, object5, { g: 1 })  // add g